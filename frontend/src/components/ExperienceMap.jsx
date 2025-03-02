import './CSS/ExperienceMap.css'
import React from 'react'

function ExperienceMap( {experience} ) {
    return (
        <>
            <div className="ExperienceMap "> 
                <div className="experience-wrapper pb-5 pb-xxl-0">
                    <div>
                        <div className="singleModuel d-flex ">
                            <div className="timelineRod d-flex flex-column mt-3">
                                <div className="timeline-dot">
                                    <div className="timeline-inner-dot"></div>
                                </div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="ms-5 d-flex flex-column">
                                <p className="companyName m-0">{experience.topText}</p>
                                <h2 className="">{experience.title}</h2>
                                <p className="workTime">{experience.period}</p>
                                <p className="mt-2 fs-5">{experience.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default ExperienceMap;