"use client"

import { motion } from "framer-motion"

const Honors = () => {
  return (
    <motion.section
      id="honors"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 font-heading">Honors and Awards</h2>
      <ul className="space-y-2">
        <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <span className="font-semibold">Winner of Smart India Hackathon 2022</span>
          <p className="text-gray-600 dark:text-gray-400">
            Hosted by AICTE, Government of India, in Smart Automation domain
          </p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <span className="font-semibold">Winner of 6 inter-college hackathons</span>
          <p className="text-gray-600 dark:text-gray-400">During undergraduate studies</p>
        </li>
        <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <span className="font-semibold">Graduate Pathway Scholarship</span>
          <p className="text-gray-600 dark:text-gray-400">Awarded $2,000 for pursuing a Master's degree</p>
        </li>
      </ul>
    </motion.section>
  )
}

export default Honors

