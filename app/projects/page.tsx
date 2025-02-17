import Link from "next/link"

const projects = [
  { id: 1, title: "Project 1", description: "Description of Project 1" },
  { id: 2, title: "Project 2", description: "Description of Project 2" },
  { id: 3, title: "Project 3", description: "Description of Project 3" },
  { id: 4, title: "Project 4", description: "Description of Project 4" },
  { id: 5, title: "Project 5", description: "Description of Project 5" },
  { id: 6, title: "Project 6", description: "Description of Project 6" },
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            id={`project-${project.id}`}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <Link href={`/projects/${project.id}`} className="text-blue-600 hover:underline">
              View details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

