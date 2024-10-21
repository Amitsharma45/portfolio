'use client'
import axios from 'axios'
import React, { useState } from 'react'


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
        <div>
            <div className="flex justify-end">
                <button onClick={handleSubmit} className='dark:bg-white dark:text-black bg-black text-white py-1 px-3 rounded-md'>Submit</button>
            </div>
            <form action="" className='w-full flex flex-col gap-5 mt-3'>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Title'
                    className='py-3 pr-3 border-none outline-none dark:bg-black text-5xl'
                />
                <input
                    type='file'
                    placeholder='image'
                    className='w-full shadow-sm dark:bg-black'
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
                <textarea
                    id='content'
                    name='content'
                    placeholder='content'
                    className='py-3 pr-3 border-none outline-none h-48 dark:bg-black text-2xl'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />

            </form>
        </div>
    )
}

export default CreateBlog;
