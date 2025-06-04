import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import PopupModal from "../components/PopupModal";

const projects = [
  {
    name: "Memory Game",
    screenshot: "/images/memoryGame.png",
    github: "https://github.com/HeddaElsa/memory-project.git",
    tech: ["React ","Node.js ", "Tailwind CSS "],
    description: "A web-based memory game where players match pairs of hidden cards using concentration and recall skills.",
    purpose: "To reinforce fundamental frontend skills through an interactive and engaging game.",
    learning: "How to manage game state, handle user interactions, and style components responsively with Tailwind CSS",
    role: "Team Member",
    challenges: " implementing accurate state logic to prevent unintended double-clicks and manage timing between flips."
  },

    {
    name: "CSS Grid Layout",
    screenshot: "/images/grid.png",
    github: "https://github.com/mazzlum5/Lektion-10-Css-Grid.git",
    tech: ["HTML ","CSS "],
    description: "A responsive web layout using CSS Grid to create a structured and visually appealing design.",
    purpose: "To demonstrate the power of CSS Grid in creating complex layouts with minimal code.",
    challenges: "Ensuring responsiveness across different screen sizes and maintaining a clean, organized code structure.",
    learning: "How to use Grid Layout to create responsive and structured web layouts.",
    role: "Developer",
   
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showProjects, setShowProjects] = useState(false);

  const filteredProjects = projects.filter((project) =>
  project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  (Array.isArray(project.tech) &&
    project.tech.some((tech) =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    ))
);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>

      <input
        type="text"
        placeholder="Search by project name or tech..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-6"
      />
      
      {filteredProjects.length === 0 && (
        <p>No projects match your search.</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {selectedProject && (
        <PopupModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Portfolio;
