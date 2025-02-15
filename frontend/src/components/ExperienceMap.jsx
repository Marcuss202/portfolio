import './CSS/ExperienceMap.css'
import React from 'react'

function ExperienceMap( {experience} ) {
    return (
        <>
            <div className="ExperienceMap ">
                <div className="wrapper">
                    <h2 className="mainText text-start ">Work Experience</h2>
                    <div className="experienceContainer p-5">
                        {experience.title}
                    </div>
                    
                    
                </div>
            </div>
        </>
    );

}

export default ExperienceMap;