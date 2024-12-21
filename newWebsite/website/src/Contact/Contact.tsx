import React from 'react';
import './Contact.css';
import Navbar from '../Navbar/Navbar';

const Contact: React.FC = () => {
  return (
    <div id="about-me">
      <Navbar></Navbar>
      <h1>About Me</h1>
      <h2>Joseph Vanstory</h2>
      <div id="about-content">
        <div className="about-text">
        <a href='mailt&#111;&#58;jo%&#54;5&#37;76a%&#54;Esto%72&#121;&#64;gm%61&#105;&#108;&#46;c&#111;m'>&#106;&#111;eva&#110;&#115;&#116;ory&#64;gmai&#108;&#46;com</a>
          <p>
            My name is Joseph Vanstory. I have a bachelors degree in computer science with a concnetration in software engineering. I have experience with Java, Python, React, Spring, and SQL. I have experience as a full stack engineer with Revature. 
          </p>
          <h2>Hobbies</h2>
          <p>
            I enjoy computers, video games, 3D printing, and cooking. I have built my own computer and have a 3d printer. i enjoy printing random gadgets and toys. I also enjoy cooking and trying new recipes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;