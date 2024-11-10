import { Skeleton } from '@radix-ui/themes'

const BlogFormSkeleton = () => {
    return (
        <div className='w-full px-64 max-[1025px]:px-0 max-[1285px]:px-0 max-sm:px-2 flex flex-col gap-10 items-center mt-4 pb-8 relative'>
            <div className="flex items-center justify-center space-x-4 max-sm:w-full max-sm:px-4 mt-10">
                <div className="space-y-4">
                    <Skeleton className="h-12 w-[70vw] max-sm:w-[90vw]" />
                    <Skeleton className="h-12 w-[70vw] max-sm:w-[90vw]" />
                    <Skeleton className="h-80 w-[70vw] max-sm:w-[90vw]" />
                </div>
            </div>
        </div>
    )
}

export default BlogFormSkeleton