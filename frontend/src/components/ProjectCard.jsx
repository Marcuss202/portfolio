import React from 'react';
import './CSS/ProjectCard.css'; // Import the CSS for the card

const ProjectCard = ({ project }) => {
    const imgUrl = `${process.env.VITE_API_URL}/${project.image}`;

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}/${month}/${day}`;
    };

    const formattedDate = formatDate(project.created_at);
    const shortDescription = project.description.substring(0, 100) + '...';

return (
    <>
    <div className="Card">
            <div className="ProjectCard" onClick={() => window.location.href = `/projects/${project.id}`}>
                    <div className="row">
                            <img src={imgUrl} alt={project.title} className="projectImage" />
                    </div>
                    <div className="row ps-4 pt-3 pr-3">
                            <div className="col-6 text-start">test</div>
                            <div className="col-6 date text-end"><p>{formattedDate}</p></div>
                    </div>
                    <h3 className='text-start pl-4 text-uppercase'>{project.title}</h3>
                    <p className='description text-start pl-4'>{shortDescription}</p>
            </div>
    </div>
    </>
);
};

export default ProjectCard;