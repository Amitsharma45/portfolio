import React from 'react'
import { Avatar as Picture } from '@radix-ui/themes'

const Avatar = () => {
  return (
    <Picture
    src='/developer.jpg'
    fallback="A"
    size='6'
    radius='full'
  />
  )
}

export default Avatar