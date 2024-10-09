'use client'
import React from 'react'
import { bricolage_grotesque } from '@/utils/fonts'
import { motion } from 'framer-motion'

const page = () => {
  return (
      <motion.div initial={{opacity: 0, y: 10}} animate={{ opacity: 1, y: 0 }} exit={{opacity: 0}} transition={{duration: 0.5}} className={`w-full h-screen flex justify-center items-center text-xl ${bricolage_grotesque}`}>
          Coming Soon...
      </motion.div>
  )
}

export default page