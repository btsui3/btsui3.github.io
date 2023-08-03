import React from 'react';
import './../LandingPage.css'; // Importing some styles
import { Link } from 'react-router-dom';


interface LandingPageProps {
  name: string;
  description: string;
  imageUrl: string;
  projectsUrl: string;
  githubUrl: string;
  linkedInUrl: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ name, description, imageUrl, projectsUrl, githubUrl, linkedInUrl }) => {
  return (
    <div className="landing-page">
      <h1>Welcome to {name}'s Portfolio</h1>
      <img src={imageUrl} alt="Profile" />
      <p>{description}</p>
      <div className="links">
        <a href={projectsUrl}>Projects</a>
        <a href={githubUrl}>GitHub</a>
        <a href={linkedInUrl}>LinkedIn</a>
        <Link to="/space">Space</Link>
      </div>
    </div>
  );
}

export default LandingPage;
