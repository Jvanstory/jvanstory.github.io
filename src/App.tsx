import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CoolLines from './portfolio/coolLines';
import HomeBackground from './background/homeBackground'; // Import the new component
import Resume from './portfolio/Resume/Resume';
import About from './About/About';
import Contact from './Contact/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<div><HomeBackground /></div>} />
          <Route path="/cool-lines" element={<CoolLines />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
