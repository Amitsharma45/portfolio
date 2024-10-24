'use client'

import { Blog } from '@/types/project'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';


const BlogList = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/blogs');
            if (response.data.success) {
                setBlogs(response.data.message);
            }
        } catch (error) {
            throw new Error(`Error while fetching the blogs ${error}`)
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

    return (
        <div className='w-full px-64 max-[1025px]:px-4 max-[1285px]:px-40 max-lg:px-0 max-sm:px-4 flex flex-col gap-10 items-center mt-4 pb-8'>
            {
                blogs && blogs.map((blog, idx) => (
                    <BlogCard key={idx} title={blog.title} author={blog.author} createdAt={blog.createdAt} image_public_id={blog.image_public_id} content={blog.content} />
                ))
            }
        </div>
    )
}

export default BlogList