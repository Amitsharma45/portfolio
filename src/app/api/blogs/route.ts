import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const blogs = await prisma.blog.findMany();
        console.log(blogs)

        return NextResponse.json(blogs);

    } catch (error) {
        return NextResponse.json({
            success: false,
            message: `No blogs found! ${error}`
        })
    }
}