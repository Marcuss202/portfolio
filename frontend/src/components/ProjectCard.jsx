import React from 'react';
import './CSS/ProjectCard.css'; // Import the CSS for the card

const ProjectCard = ({ project }) => {
  return (
    <>
    <div className="Card">
        <div className="ProjectCard">
            <img src={project.image} alt={project.title} className="projectImage" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
    </div>
        {/* <div className="project-card">
            
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={`/projects/${project.id}`} className="view-details">View Details</a>
        </div> */}
    </>
  );
};

export default ProjectCard;