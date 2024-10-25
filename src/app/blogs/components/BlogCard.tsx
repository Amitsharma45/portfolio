'use client'

import React from 'react'
import { CldImage } from 'next-cloudinary';
import { bricolage_grotesque } from '@/utils/fonts';
import { formatDate } from '@/utils/formatdate';
import { Link } from '@radix-ui/themes';

type Blog = {
    id?: string,
    title: string,
    content?: unknown,
    image_public_id: string,
    author: string
    createdAt: string
}

const BlogCard = ({ title, image_public_id, createdAt, content, id }: Blog) => {
    return (
        <Link href={`/blogs/${id}`} underline='none'>
            <div className={`flex gap-5 py-1 px-5 rounded-lg ${bricolage_grotesque}`}>
                <div className="py-3 w-[30vw] max-sm:w-full space-y-2">
                    <p className='text-[26px] max-sm:text-base font-extrabold dark:text-white text-black'>{title}</p>
                    <div className="line-clamp-2 dark:text-[#dcdcdc] text-[#6B6B6B] text-[15px] max-sm:text-sm" dangerouslySetInnerHTML={{ __html: content as TrustedHTML }} />
                    <div className="text-xs space-x-4 !mt-4">
                        <span className='dark:text-[#dcdcdc] text-[#6B6B6B] font-semibold'>{formatDate(createdAt)}</span>
                    </div>
                </div>
                <div className="max-sm:pt-5 max-lg:pt-5">
                    <CldImage
                        width="300"
                        height="300"
                        src={image_public_id}
                        sizes="100vw"
                        alt="Description of my image"
                        radius="10"
                        className='max-sm:h-16 max-sm:w-40 max-lg:w-52 max-lg:h-32'
                    />
                </div>
            </div>
        </Link>
    )
}

export default BlogCard