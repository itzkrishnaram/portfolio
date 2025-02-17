import type React from "react"

const Experience: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-medium">Machine Learning Developer</h3>
          <p className="text-gray-600">Society for Electronics Transactions and Security (SETS), Chennai, India</p>
          <p className="text-gray-600">January 2023 – August 2023</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>
              Reduced training time of ASCAD dataset by 60% using TensorFlow Mirror Strategy and transfer learning
            </li>
            <li>Executed on high-performance computers PARAM Spoorthi and PARAM Porul</li>
            <li>Documented workflow using LaTeX and submitted for publication in Space Publications</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-medium">Full Stack Developer Intern</h3>
          <p className="text-gray-600">Exposys Data Labs, Chennai, India</p>
          <p className="text-gray-600">January 2022 - December 2022</p>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Developed a complete health tracking website using JavaScript and Flask</li>
            <li>Integrated database management using MySQL for storing and retrieving health metrics</li>
            <li>Led a team of 4 to improve user interactions, increasing customer satisfaction by 20%</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience

