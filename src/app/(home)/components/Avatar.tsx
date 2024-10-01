import React from 'react'
import { Link, Avatar as Picture } from '@radix-ui/themes'

const Avatar = () => {
  return (
  <Link href='https://twitter.com/fardeen14693425'>
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