"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "HTML/CSS", "SQL"],
  },
  {
    name: "Frameworks",
    skills: ["React", "Flask", "Node.js", "TensorFlow", "Keras"],
  },
  {
    name: "Tools & Technologies",
    skills: ["Git", "Docker", "Jenkins", "Jira", "AWS"],
  },
]

const skillColors = [
  "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
]

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8 md:py-12"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 font-heading">Technical Skills</h2>
      <div className="space-y-6 md:space-y-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={category.name}>
            <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
                    skillColors[skillIndex % skillColors.length]
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills

