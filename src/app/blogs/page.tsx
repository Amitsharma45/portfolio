import BlogList from './components/BlogList'
import { Suspense } from 'react'
import ClientWrapper from './components/ClientWrapper'
import BlogSkeleton from './components/BlogSkeleton'

const Page = () => {
  return (
    <ClientWrapper>
      <Suspense fallback={<BlogSkeleton />}>
        <BlogList />
      </Suspense>
    </ClientWrapper>
  )
}

export default Page