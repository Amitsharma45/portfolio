import { PrismaClient } from "@prisma/client";
import { notFound } from 'next/navigation'

const prisma = new PrismaClient();

export async function getBlog(blogId: string) {
    try {
        const blog = await prisma.blog.findUnique({
            where: { id: blogId },
            select: {
                id: true,
                title: true,
                content: true,
                author: true,
                createdAt: true,
                image_public_id: true
            }
        })

        if (!blog) {
            notFound()
        }

        return blog
    } catch (error) {
        console.error('Error fetching blog:', error)
        throw new Error('Failed to fetch blog')
    }
}