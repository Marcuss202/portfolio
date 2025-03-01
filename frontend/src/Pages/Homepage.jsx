import BioBox from '../components/BioBox.jsx'
import Navbar from '../components/Navbar.jsx'
import ExperienceMap from '../components/ExperienceMap.jsx'
import SkillCard from '../components/SkillCard.jsx'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../App.jsx'; 



function Homepage() {
      const [experiences, setExperiences] = useState([]);
      const [skills, setSkills] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      

      useEffect(() => {
        const fetchExperiences = async () => {
          try {
            const response = await fetch(`https://markuss.onrender.com/ExperienceMap/`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Sort the data in descending order by orderNumber
            const sortedData = data.sort((a, b) => a.orderNumber - b.orderNumber);
            setExperiences(sortedData);
          } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };

        const fetchSkills = async () => {
          try {
            const response = await fetch(`https://markuss.onrender.com/ProgrammingSkills/`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            // Sort the data in descending order by orderNumber
            const sortedData = data.sort((a, b) => a.id - b.id);
            setSkills(sortedData);
          } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchExperiences();
        fetchSkills();
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
            <div className="experience-wrapper py-5">
              <h2 className="mainText text-start ">Work Experience</h2>
            </div>
            <div className="Experience-map">
              {experiences.map((experience) => (
                  <ExperienceMap key={experience.id} experience={experience} /> // Use the ProjectCard component
              ))}
            </div>
            <div className="padding"></div>
            <div className="experience-wrapper">
              <h2 className='pb-5'>Current Technologies</h2>
              {skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>

        </>
    )
}

export default Homepage