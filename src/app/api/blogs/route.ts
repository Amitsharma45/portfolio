import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const blogs = await prisma.blog.findMany();
        return NextResponse.json(
            { success: true, message: blogs },
            {
                status: 200,
                headers: {
                    'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30'
                }
            }
        );

    } catch (error) {
        return NextResponse.json(
            { success: false, message: `Error while fetching blogs: ${error}` },
            { status: 500 }
        )
    }
}
