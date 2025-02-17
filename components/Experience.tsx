"use client"

import { motion } from "framer-motion"

const Experience = () => {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-4 font-heading">Work Experience</h2>
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Machine Learning Developer</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Society for Electronics Transactions and Security (SETS), Chennai, India
          </p>
          <p className="text-gray-600 dark:text-gray-400">January 2023 – August 2023</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>
              Reduced training time of ASCAD dataset by 60% using TensorFlow Mirror Strategy and transfer learning
            </li>
            <li>Executed on high-performance computers PARAM Spoorthi and PARAM Porul</li>
            <li>Documented workflow using LaTeX and submitted for publication in Space Publications</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Full Stack Developer Intern</h3>
          <p className="text-gray-600 dark:text-gray-400">Exposys Data Labs, Chennai, India</p>
          <p className="text-gray-600 dark:text-gray-400">January 2022 - December 2022</p>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
            <li>Developed a complete health tracking website using JavaScript and Flask</li>
            <li>Integrated database management using MySQL for storing and retrieving health metrics</li>
            <li>Led a team of 4 to improve user interactions, increasing customer satisfaction by 20%</li>
          </ul>
        </div>
      </div>
    </motion.section>
  )
}

export default Experience

