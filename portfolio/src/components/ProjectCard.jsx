import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="bg-white text-black rounded-lg p-4 shadow-md hover:shadow-xl cursor-pointer transition"
    >
      <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
      <img
        src={project.screenshot}
        alt={project.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
        <p className="mb-2"><strong>Tech used:</strong> {project.tech}</p>
        <p className="mb-2"><strong>Description:</strong> {project.description}</p>
        <p className="mb-2"><strong>Purpose:</strong> {project.purpose}</p>
        <p className="mb-2"><strong>Learning:</strong> {project.learning}</p>
        <p className="mb-2"><strong>Role:</strong> {project.role}</p>
        <p className="mb-2"><strong>Challenges solved:</strong> {project.challenges}</p>
        
    </div>
  );
};

export default ProjectCard;
