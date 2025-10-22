import React from "react";
import '../index.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Project 1",
            image: "/path/to/image1.png",
            description: "Description of project 1",
            github: "https://github.com/yourusername/project1"
        },
        {
            id: 2,
            title: "Project 2",
            image: "/path/to/image2.png",
            description: "Description of project 2",
            github: "https://github.com/yourusername/project2"
        },
        {
            id: 3,
            title: "Project 3",
            image: "/path/to/image3.png",
            description: "Description of project 3",
            github: "https://github.com/yourusername/project3"
        },
        {
            id: 4,
            title: "Project 4",
            image: "/path/to/image4.png",
            description: "Description of project 4",
            github: "https://github.com/yourusername/project4"
        }
    ];

    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <a 
                        key={project.id} 
                        className="project-card"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={project.image} alt={project.title} />
                        <div className="project-overlay">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Projects;