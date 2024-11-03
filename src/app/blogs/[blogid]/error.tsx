// app/blog/[blogid]/error.tsx
'use client'

export default function Error({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h2 className="text-2xl font-bold">Something went wrong!</h2>
            <button
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white"
                onClick={() => reset()}
            >
                Try again
            </button>
        </div>
    )
}