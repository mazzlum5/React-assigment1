import React from 'react'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">My Portfolio</h1>
      <div className="grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default App
