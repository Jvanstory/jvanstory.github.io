import React, { useEffect } from 'react';
import './About.css';
import Navbar from '../Navbar/Navbar';

const About: React.FC = () => {
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        const navbarHeight = navbar.clientHeight;
        document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
      }
    };

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  return (
    <div id="about-me">
      <Navbar />
      <h1 id="about-block">About This Website</h1>
      <div id="about-content">
        <div className="about-text">
          <p>
            This website was created using React. It is a single page application that uses React Router to navigate between pages. The website is hosted on GitHub Pages. The source code for this website is available on GitHub.
          </p>
          <p>The old website was created using html, css, javascript, and Jquery. It was created for one of my college classes. It was also hosted on github and using UNCC webhosting.</p>
        </div>
      </div>
    </div>
  );
};

export default About;