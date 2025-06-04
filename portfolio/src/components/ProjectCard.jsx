import React from 'react'

const ProjectCard = ({
  name,
  screenshot,
  github,
  tech,
  description,
  purpose,
  learning,
  role,
  challenge
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md mx-auto mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <img src={screenshot} alt={name} className="rounded-md mb-4" />
      <p className="text-sm text-gray-600 mb-2"><strong>Tech Used:</strong> {tech}</p>
      <p className="mb-2"><strong>Description:</strong> {description}</p>
      <p className="mb-2"><strong>What it does:</strong> {purpose}</p>
      <p className="mb-2"><strong>What I learned:</strong> {learning}</p>
      <p className="mb-2"><strong>My role:</strong> {role}</p>
      <p className="mb-2"><strong>Challenges:</strong> {challenge}</p>
      <a href={github} target="_blank" className="text-blue-600 hover:underline mt-2 inline-block">View GitHub Repo</a>
    </div>
  )
}

export default ProjectCard
