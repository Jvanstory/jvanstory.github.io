import React from 'react';
import './Resume.css';
import Navbar from '../../Navbar/Navbar';

const Resume: React.FC = () => {
  return (
    <div id="resume-container">
        <Navbar></Navbar>
      <h1 className='resume'>My Resume</h1>
      <a href="./images/Joseph Vanstory - Resume.pdf" download="Resume.pdf" className="resume-link">
        <img src="./images/Resume.jpg" alt="Resume" className="resume-image" />
      </a>
    </div>
  );
};

export default Resume;
