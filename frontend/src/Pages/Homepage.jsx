import BioBox from '../components/BioBox.jsx'
import Navbar from '../components/Navbar.jsx'
import ExperienceMap from '../components/ExperienceMap.jsx'
import React, { useEffect, useState } from 'react'



function Homepage() {
      const [experiences, setExperiences] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      useEffect(() => {
          const fetchExperiences = async () => {
            try {
              const response = await fetch('http://127.0.0.1:8000/ExperienceMap/');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setExperiences(data);
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
            <BioBox />
            <div className="Experience-map">
              {experiences.map((experience) => (
                  <ExperienceMap key={experience.id} experience={experience} /> // Use the ProjectCard component
              ))}
            </div>
        </>
    )
}

export default Homepage