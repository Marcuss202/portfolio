import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx'
import { useParams } from 'react-router-dom';
import './CSS/ProjectDetail.css';
import { BASE_URL } from '../App.jsx'; 

const ProjectDetail = () => {
    const { id } = useParams(); // Get the project ID from the URL
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let formattedDate = 'No date';
    try {
        formattedDate = project.created_at.toString().substring(0, 10).replace(/-/g, '/');
    } catch (error) {
        console.error('Error formatting date:', error);
    }

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`${BASE_URL}/PersonalProjects/${id}/`); // Adjust the URL as needed
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProject();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!project) {
        return <div>No project found.</div>;
    }

    return (
        <>
            <Navbar />
            <div className="details">
                <div className="project-detail">
                    <section class="project-detail">
                        <img src={`http://127.0.0.1:8000${project.image}`} alt={project.title} class="project-image" />
                        <div class="project-description">
                            <div className='text-end pt-2'><p>{formattedDate}</p></div>
                            <h2>{project.title}</h2>
                            <div 
                                class="project-content" 
                                dangerouslySetInnerHTML={{ __html: project.Html_desc }}
                            ></div>
                        </div>
                    </section>
                    <div class="line"></div>
                    <div class="back-button">
                        <button className="btn mainButton" onClick={() => window.history.back()}>Back</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetail;