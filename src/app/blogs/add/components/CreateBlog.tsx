'use client'

import axios from 'axios'
import React, { useState, useRef } from 'react'
import BlogEditor from './BlogEditor'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { bricolage_grotesque } from '@/utils/fonts'
import { toast } from 'sonner'
import { z } from 'zod'
import { ApiResponse } from '@/types/project'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Link } from '@radix-ui/themes'
import BlogFormSkeleton from './BlogFormSkeleton'

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

const blogSchema = z.object({
    title: z.string().min(5, 'Title is required'),
    content: z.string().min(10, 'Content is required'),
    file: z
        .custom<File>((file) => file instanceof File)
        .refine((file) => file.size <= MAX_FILE_SIZE, {
            message: 'File must be less than 5MB',
        })
        .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
            message: 'Only JPEG, PNG, and GIF files are allowed',
        }),
});

const CreateBlog = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [isPublishing, setIsPublishing] = useState<boolean>(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const { status } = useSession();

    if (status === "loading") {
        return <BlogFormSkeleton />
    }

    if (status === "unauthenticated") {
        return <div>
            <p className='text-lg font-bold text-center mt-10'>You are Unauthorized, Please&nbsp;
                <Link href="/login" className="text-blue-500 hover:text-blue-
                700 transition duration-300 ease-in-out">
                    Login
                </Link>
            </p>
        </div>
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const result = blogSchema.safeParse({ title, content, file });

        if (!result.success) {
            return result.error.errors.forEach((err) => toast.error(err.message));
        }

        setIsPublishing(true);
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('file', file as File);

        try {
            const response = await axios.post<ApiResponse>('/api/create-blog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                toast.success('Blog published successfully!');
                setTitle('');
                setContent('');
                setFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
                router.push('/blogs')
                router.refresh();
            }
        } catch (error) {
            toast.error(`Error while publishing blog: ${error}`);
        } finally {
            setIsPublishing(false);
        }
    };

    return (
        <div className="overflow-hidden h-fit max-sm:px-4 max-sm:w-full relative">
            <div className="flex justify-end">
                <Button onClick={handleSubmit} disabled={isPublishing}>
                    {isPublishing ? 'Publishing...' : 'Publish'}
                </Button>
            </div>
            <form className="w-full flex flex-col gap-8 mt-3" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className={`py-5 pr-3 border-none outline-none dark:bg-black text-4xl max-sm:text-xl font-semibold ${bricolage_grotesque}`}
                />
                <Input
                    type="file"
                    placeholder="image"
                    className="w-full shadow-sm dark:bg-black py-2"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    ref={fileInputRef}
                />
            </form>
            <BlogEditor setContent={setContent} />
        </div>
    );
};

export default CreateBlog;