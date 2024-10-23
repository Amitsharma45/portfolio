'use client'

import axios from 'axios'
import React, { useState } from 'react'
import BlogEditor from './BlogEditor'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { bricolage_grotesque } from '@/utils/fonts'


const CreateBlog = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [file, setFile] = useState<File | null>(null)


    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (file) {
            formData.append('file', file);
        }

        try {
            const response = await axios.post('/api/create-blog', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='overflow-hidden h-fit max-sm:px-4 max-sm:w-full relative'>
            <div className="flex justify-end">
                <Button onClick={handleSubmit}>Publish</Button>
            </div>
            <form className='w-full flex flex-col gap-8 mt-3'>
                <Input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                    className={`py-5 pr-3 border-none outline-none dark:bg-black text-4xl max-sm:text-xl font-semibold ${bricolage_grotesque}`}
                />

                <Input
                    type='file'
                    placeholder='image'
                    className='w-full shadow-sm dark:bg-black py-2'
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
            </form>
            <BlogEditor setContent={setContent} />
        </div>
    )
}

export default CreateBlog;
