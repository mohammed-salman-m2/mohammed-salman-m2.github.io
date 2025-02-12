import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://scontent.fccj2-1.fna.fbcdn.net/v/t39.30808-1/475296715_644624431436694_3817992111451528103_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=sFx9mQvCtoUQ7kNvgFlBmdj&_nc_oc=AdiFEA61YODvz8Cm82Glj6s4BXS6P1t9WQpyA1byAhPFGs1smSMM6bJxgQReN4WxyekScI-tSVRbIh4k3a5RkEsF&_nc_zt=24&_nc_ht=scontent.fccj2-1.fna&_nc_gid=ALwycjIKojJvRSkpT6aYIBz&oh=00_AYAdNucljlmmT2jGOMM6ClfNP7DZV_ElLJ_lpv67BGopjg&oe=67B29D43" alt="Avatar" />
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
