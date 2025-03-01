import React from 'react';
import './CSS/SkillCard.css';

const SkillCard = ({ skill }) => {

    return (
        <>
        <div className="CardBoxes d-flex flex-wrap">
            <div className="SkillCard row">
                <div className="col">
                    {skill.language_name}
                </div>
            </div>
        </div>
        </>
    );
}

export default SkillCard;