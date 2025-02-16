import Navbar from '../components/Navbar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import React, { useEffect, useState } from 'react'


const Projects = () => {
    const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage error state

  useEffect(() => {
          const fetchExperiences = async () => {
            try {
              const response = await fetch('http://127.0.0.1:8000/PersonalProjects/');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              // Sort the data in descending order by orderNumber
              const sortedData = data.sort((a, b) => a.orderNumber - b.orderNumber);
              setProjects(sortedData);
            } catch (error) {
              console.error('There was a problem with the fetch operation:', error);
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
      
          fetchExperiences();
        }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if any
  }

    return (
    <>
        <Navbar />
        <div className="Projects container text-center mt-5">
            <h2 className="mb-3">Projects</h2>
            <p>These are the projects I have done!</p>

            <div className="project-grid">
              {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} /> // Use the ProjectCard component
              ))}
            </div>
        </div>
    </>
    );
  };

export default Projects