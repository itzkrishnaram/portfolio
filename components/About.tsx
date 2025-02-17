"use client"

import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 font-heading">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300">
       
      </p>
    </motion.section>
  )
}

export default About

