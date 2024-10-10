import React from 'react'
import { Link, Avatar as Picture } from '@radix-ui/themes'

const Avatar = () => {
  return (
  <Link href='https://x.com/intent/follow?screen_name=fardeen14693425' target='_blank'>
      <Picture
        src='/fardeen.jpg'
        fallback="A"
        size='6'
        radius='full'
    />
  </Link>
  )
}

export default Avatar