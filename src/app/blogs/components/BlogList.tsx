'use client'

import { Blog } from '@/types/project'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';
import { Skeleton } from "@/components/ui/skeleton"



const BlogList = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false)

    const fetchBlogs = async () => {
        setIsFetching(true)
        try {
            const response = await axios.get('/api/blogs');
            if (response.data.success) {
                setBlogs(response.data.message);
            }
        } catch (error) {
            throw new Error(`Error while fetching the blogs ${error}`)
        } finally {
            setIsFetching(false)
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className='w-full px-64 max-[1025px]:px-0 max-[1285px]:px-0 max-sm:px-2 flex flex-col gap-10 items-center mt-4 pb-8'>
            {
                isFetching && (
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="flex items-center space-x-4 w-[50vw] max-sm:w-full max-sm:px-4 mt-10">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[50vw] max-sm:w-[90vw]" />
                                <Skeleton className="h-12 w-[50vw] max-sm:w-[90vw]" />
                                <div className="flex gap-4">
                                    <Skeleton className="h-4 w-[100px]" />
                                    <Skeleton className="h-4 w-[100px]" />
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
            {
                blogs && blogs.map((blog, idx) => (
                    <BlogCard key={idx} title={blog.title} createdAt={blog.createdAt} content={blog.content} id={blog.id} />
                ))
            }
        </div>
    )
}

export default BlogList