import React, { useState } from "react";
import "./CSS/Personality.css";

const Personality = () => {
    const [activeSlide, setActiveSlide] = useState(0); // Track the active slide

    const handleSlideClick = (index) => {
        setActiveSlide(index); // Update the active slide
    };

    return (
        <div className="PersonalityTraits container">
            <div className="imgContainer">
                {[...Array(7)].map((_, index) => (
                    <div
                        key={index}
                        className={`slide_div ${activeSlide === index ? "active" : ""}`}
                        onClick={() => handleSlideClick(index)}
                        style={{
                            transform: `translateX(${(index - activeSlide) * 40}%)`, // Adjusted spacing
                        }}
                    >
                        <div
                            id={`color${index + 1}`}
                            className={`backgroundColorCircle ${activeSlide === index ? "active" : ""}`}
                        >
                            <span>Item {index + 1}</span>
                        </div>
                        <div
                            className={`button ${activeSlide === index ? "active" : ""}`}
                            id={`button${index + 1}`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Personality;