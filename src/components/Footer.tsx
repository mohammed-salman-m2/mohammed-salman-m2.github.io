import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/mohammed-salman-m2/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/mohammed-salman-m-m/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Designed & built by <a href="https://github.com/mohammed-salman-m2/portfolio-website" target="_blank" rel="noreferrer">Mohammed Salman M M</a> with 💙</p>
      <p>© 2025 All rights reserved.</p>
    </footer>
  );
}

export default Footer;