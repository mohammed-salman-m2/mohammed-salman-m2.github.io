import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP",
    "React",,
    "MySQL",
    "Git",
    "PostgreSQL",
];

// const labelsSecond = [
//     "Git",
//     "GitHub Actions",
//     "Docker",
//     "AWS",
//     "Azure",
//     "Linux",
//     "Snowflake",
//     "Pandas",
//     "Selenium",
// ];

const labelsThird = [
    "Python",
    "TensorFlow",
    "Scikit-learn", 
    "NLTK",
    "Streamlit",
    "Json",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build functional and user-friendly web applications using modern technologies. With experience in both frontend and backend development, I focus on creating efficient and scalable solutions that deliver value at every stage of the development process. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill"> </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI Development & ML</h3>
                    <p>Stay ahead in the tech landscape by leveraging advanced AI models and machine learning techniques. I have hands-on experience developing intelligent systems and deploying scalable AI solutions to drive innovation, optimize decision-making, and improve project outcomes.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div> 
            </div>
        </div>
    </div>
    );
}

export default Expertise;