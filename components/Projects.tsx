"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Emergency Vehicle Detection System",
    description: "Developed a system using image processing and CNN, achieving 98% detection accuracy.",
    details: [
      "Trained ML models on 10,000 images for emergency vehicle detection",
      "Integrated Arduino boards and sound sensors for real-time siren detection",
      "Automated traffic signals to clear routes for emergency vehicles, improving response times",
    ],
    technologies: ["Python", "TensorFlow", "OpenCV", "Arduino"],
  },
  // Add more projects here
]

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8 md:py-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-heading">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => setSelectedProject(project)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="text-lg md:text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-2xl w-full relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                aria-label="Close modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h3 id="modal-title" className="text-2xl font-bold mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedProject.description}</p>
              <h4 className="text-lg font-semibold mb-2">Key Features:</h4>
              <ul className="list-disc list-inside mb-4">
                {selectedProject.details.map((detail, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">
                    {detail}
                  </li>
                ))}
              </ul>
              <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default Projects

