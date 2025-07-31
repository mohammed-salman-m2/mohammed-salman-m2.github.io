import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://github.com/mohammed-salman-m2/mohammed-salman-m2.github.io/blob/master/src/assets/images/profilepic.jpg" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/mohammed-salman-m2/portfolio-website" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohammed-salman-m-m/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Mohammed Salman M M</h1>
          <p>Software Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/mohammed-salman-m2/portfolio-website" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohammed-salman-m-m/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
