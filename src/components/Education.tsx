import type React from "react"

const Education: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Education</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-medium">Illinois Institute of Technology, Chicago, IL</h3>
          <p className="text-gray-600">Master of Computer Science | GPA: 3.33</p>
          <p className="text-gray-600">Expected Graduation: May 2026</p>
        </div>
        <div>
          <h3 className="text-xl font-medium">St. Joseph's College of Engineering, Chennai, India</h3>
          <p className="text-gray-600">Bachelor of Engineering in Computer Science | GPA: 3.7</p>
          <p className="text-gray-600">Graduated: April 2023</p>
        </div>
      </div>
    </section>
  )
}

export default Education

