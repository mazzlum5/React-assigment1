import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import PopupModal from "../components/PopupModal";

const projects = [
      {
    name: "Memory Game",
    screenshot: "/images/memoryGame.png",
    github: "https://github.com/HeddaElsa/memory-project.git",
    tech: "React, Node.js, Tailwind CSS",
    description: "A web-based memory game where players match pairs of hidden cards using concentration and recall skills.",
    purpose: "To reinforce fundamental frontend skills through an interactive and engaging game.",
    learning: "How to manage game state, handle user interactions, and style components responsively with Tailwind CSS",
    role: "Team Member",
    challenge: " implementing accurate state logic to prevent unintended double-clicks and manage timing between flips."
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
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
