'use client'
import React, { useState } from 'react'

const CreateBlog = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [file, setFile] = useState<File | null>(null)

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const formData = {
            title: title,
            content: content,
            file: file
        }

        console.log(formData)
    }
    return (
        <div>
            <form action="" className='w-full flex flex-col gap-3' onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title' className='py-3 pr-3 border-none outline-none dark:bg-black text-5xl' />
                <input type='file' placeholder='image' className='w-full shadow-sm dark:bg-black' onChange={(e) => setFile(e.target.files?.[0] || null)} />
                <textarea id='content' name='content' placeholder='content' className='py-3 pr-3 border-none outline-none h-48 dark:bg-black text-2xl' value={content} onChange={(e) => setContent(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default CreateBlog