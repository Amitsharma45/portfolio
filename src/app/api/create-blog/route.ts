import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
import { prisma } from '@/lib/prisma'
import { getServerSession } from "next-auth/next";

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

interface CloudinaryUploadResult {
    public_id: string;
    [key: string]: unknown
}

export async function POST(req: NextRequest) {
    const session = await getServerSession();

    if (!session) {
        return NextResponse.json(
            { success: false, message: "You are Unauthorized!" },
            { status: 401 }
        );
    }

    try {
        const formData = await req.formData();
        const file = formData.get("file") as File | null;
        const title = formData.get("title");
        const content = formData.get("content");

        if (!file) {
            return NextResponse.json(
                { success: false, error: "File not found!" },
                { status: 400 }
            )
        }

        if (!title) {
            return NextResponse.json(
                { success: false, error: "Title not found!" },
                { status: 400 }
            )
        }

        if (!content) {
            return NextResponse.json(
                { success: false, error: "Content not found!" },
                { status: 400 }
            )
        }


        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const result = await new Promise<CloudinaryUploadResult>(
            (resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "next-cloudinary-uploads" },
                    (error, result) => {
                        if (error) reject(error);
                        else resolve(result as CloudinaryUploadResult);
                    }
                )
                uploadStream.end(buffer)
            }
        )


        await prisma.blog.create({
            data: {
                title: title.toString(),
                content: content.toString(),
                author: session?.user?.name as string,
                image_public_id: result.public_id,
                createdAt: new Date()
            }
        })

        return NextResponse.json(
            { success: true, message: "Blog published successfully!" },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json(
            { success: false, error: `Server Error: ${error}` },
            { status: 500 }
        );
    }
}