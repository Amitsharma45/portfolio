// app/blog/[blogid]/loading.tsx
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="w-full mt-40 flex flex-col items-center">
            <div className="px-80 max-[1285px]:px-60 max-sm:px-4 max-lg:px-20 w-full">
                <Skeleton className="h-10 w-3/4" />
                <div className="mt-5 flex items-center gap-2">
                    <Skeleton className="h-8 w-8 rounded-full" />
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="mt-10 h-[400px] w-full" />
                <div className="mt-7 space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                </div>
            </div>
        </div>
    )
}