import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://scontent.fccj2-1.fna.fbcdn.net/v/t39.30808-1/475296715_644624431436694_3817992111451528103_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=1d2534&_nc_ohc=ZhaI9ONx7IoQ7kNvwEYccjB&_nc_oc=Admxm208iGWRBvHapfrbJjfn_4TY0CA8QwKky51ybtO-UsGg18guCQodwzWmrW-O5UWlOJiircbMfx0lyO49y1MH&_nc_zt=24&_nc_ht=scontent.fccj2-1.fna&_nc_gid=SboDFCrUQUYEDRoTzKtGhQ&oh=00_AfRNACXkyDgttDq0aZQrHbUsz8vG5Utqy2rhEvEE09Zg3g&oe=6890C203" alt="Avatar" />
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
