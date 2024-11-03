import { prisma } from '@/lib/prisma'
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest, { params }: { params: { blogid: string } }) {
    const blogid = params.blogid;

    try {
        const blog = await prisma.blog.findUnique({
            where: {
                id: blogid,
            },
        });

        return NextResponse.json(
            { success: true, message: blog },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { success: false, message: `Error while fetching blog: ${error}` },
            { status: 500 }
        );
    }


}
