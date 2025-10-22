import React from "react";
import '../index.css';
import about from '../assets/about.png';
import projects from '../assets/projects.png';
import contact from '../assets/contact.png';

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      
    return (
        <nav className="navbar">
          <img src={about} alt="About" className="nav-icon" onClick={() => scrollToSection('about')} />
          <img src={projects} alt="Projects" className="nav-icon" onClick={() => scrollToSection('projects')} />
          <img src={contact} alt="Contact" className="nav-icon" onClick={() => scrollToSection('contact')} />
        </nav>
    );
}

export default Navbar;
