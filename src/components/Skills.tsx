import type React from "react"

const Skills: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
      <div className="space-y-2">
        <p>
          <strong>Programming Languages:</strong> Python, Java, HTML, CSS, JavaScript, SQL
        </p>
        <p>
          <strong>Frameworks:</strong> React, Flask, NodeJS, FastAPI, TensorFlow, Keras
        </p>
        <p>
          <strong>Other Tools and Technology:</strong> Git, Anaconda, Jupyter Notebook, IntelliJ, Visual Studio Code,
          PyCharm, MySQL, Cursor, Jenkins, Jira
        </p>
      </div>
    </section>
  )
}

export default Skills

