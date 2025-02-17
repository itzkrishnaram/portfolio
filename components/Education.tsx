"use client"

import { motion } from "framer-motion"

const Education = () => {
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 font-heading">Education</h2>
      <div className="space-y-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Illinois Institute of Technology, Chicago, IL</h3>
          <p className="text-gray-600 dark:text-gray-400">Master of Computer Science | GPA: 3.33</p>
          <p className="text-gray-600 dark:text-gray-400">Graduating: May 2026</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">St. Joseph's College of Engineering, Chennai, India</h3>
          <p className="text-gray-600 dark:text-gray-400">Bachelor of Engineering in Computer Science | GPA: 3.7</p>
          <p className="text-gray-600 dark:text-gray-400">Graduated: April 2023</p>
        </div>
      </div>
    </motion.section>
  )
}

export default Education

