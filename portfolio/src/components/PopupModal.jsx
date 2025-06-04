import React from "react";

const PopupModal = ({ project, onClose }) => {
    if (!project) return null;


    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-xl w-full relative">
                <button
                    className="absolute top-2 right-2 text-gray-700 text-xl font-bold hover:text-red-500 cursor-pointer"
                    onClick={onClose}
                >
                    ✖
                </button>

                <div className="bg-white text-black rounded-lg p-4 shadow-md hover:shadow-xl">
                    <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                    <img
                        src={project.screenshot}
                        alt={project.name}
                        className="w-full rounded mb-4"
                    />

                    <p className="mb-2"><strong>Tech used:</strong> {project.tech}</p>
                    <p className="mb-2"><strong>Description:</strong> {project.description}</p>
                    <p className="mb-2"><strong>Purpose:</strong> {project.purpose}</p>
                    <p className="mb-2"><strong>Learning:</strong> {project.learning}</p>
                    <p className="mb-2"><strong>Role:</strong> {project.role}</p>
                    <p className="mb-2"><strong>Challenges solved:</strong> {project.challenges}</p>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PopupModal;
