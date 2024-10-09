'use client'
import React from 'react'
import About from './components/About'
import { motion } from 'framer-motion'

const page = () => {
  return (
   <motion.div initial={{opacity: 0, y: 20}} animate={{ opacity: 1, y: 0 }} exit={{opacity: 0}} transition={{duration: 0.5}} className="mt-32 dark:bg-black">
        <About />
    </motion.div>
  )
}

export default page