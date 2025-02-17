import type React from "react"

const Projects: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <div>
        <h3 className="text-xl font-medium">Emergency Vehicle Detection System</h3>
        <p className="text-gray-600">St. Joseph's College of Engineering, Chennai, India</p>
        <p className="text-gray-600">January 2022 - December 2022</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Developed a system using image processing and CNN, achieving 98% detection accuracy</li>
          <li>Trained ML models on 10,000 images for emergency vehicle detection</li>
          <li>Integrated Arduino boards and sound sensors for real-time siren detection</li>
          <li>Automated traffic signals to clear routes for emergency vehicles, improving response times</li>
        </ul>
      </div>
    </section>
  )
}

export default Projects

