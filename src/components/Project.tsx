import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://simple-smart-chatbot.streamlit.app/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://simple-smart-chatbot.streamlit.app/" target="_blank" rel="noreferrer"><h2>Smart AI Chatbot </h2></a>
                <p>Designed and deployed an intelligent chatbot using Natural Language Processing (NLP) to facilitate human-like conversations. 
                    Built with Streamlit, TensorFlow, Scikit-learn, and NLTK, the chatbot accurately classifies user intents and generates context-aware responses.
                     It is scalable for use cases like customer support and education.</p>
                <a href="https://github.com/mohammed-salman-m2/smart-chatbot" target="_blank" rel="noreferrer"><h4> Explore the code on GitHub!</h4></a>
            </div>

            <div className="project">
                <a href="https://github.com/mohammed-salman-m2/vmas" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/mohammed-salman-m2/vmas" target="_blank" rel="noreferrer"><h2>Vehicle Modification Approval System</h2></a>
                <p>The VMAS is a smart web platform that lets vehicle owners easily submit modification requests, which are then reviewed by the Motor Vehicle Department (MVD) to ensure they meet legal standards.
                     With real-time updates, automated notifications, and intuitive dashboards, it keeps both users and MVD staff in sync.</p>
                     <a href="https://github.com/mohammed-salman-m2/vmas" target="_blank" rel="noreferrer"><h4>Dive into the source code on GitHub!</h4></a>
            </div>


            
        </div>
    </div>
    );
}

export default Project;