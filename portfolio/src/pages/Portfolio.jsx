import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  const [showProjects, setShowProjects] = useState(false);

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

  return (
     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
      <h1>My Projects</h1>

          {projects.map((proj, index) => (
            <ProjectCard key={index} {...proj} />
          ))}

    </div>
  );
}
