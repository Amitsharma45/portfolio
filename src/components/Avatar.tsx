import React from 'react'
import { Avatar as Picture } from '@radix-ui/themes'

const Avatar = () => {
  return (
    <Picture
    // src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
    src='/developer.jpg'
    fallback="A"
    size='6'
    radius='full'
  />
  )
}

export default Avatar