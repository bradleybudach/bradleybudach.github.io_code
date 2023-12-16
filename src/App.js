import './styles/Header.css';
import './styles/Theme.css';
import StarsHeader from './components/StarCanvas';
import AboutMeSection from './components/AboutMe';
import ProjectsSection from './components/Projects';
import ContactSection from './components/ContactMe';
import { forwardRef, useRef } from 'react';

// nav dictionary:
const Navigation = {
  AboutMe: "AboutMe",
  Projects: "Projects",
  Contact: "ContactMe"
}

const scrollOffset = 100; // offsets scroll position to be slighly above target

function App() {
  // Navigation Refs:
  const aboutMeSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const navigate = (target) => {
    let y = 0;

    switch (target) { // find position of selected target:
      case Navigation.AboutMe:
        y = aboutMeSectionRef.current.getBoundingClientRect().top + document.documentElement.scrollTop - scrollOffset;
        break;
      case Navigation.Projects:
        y = projectsSectionRef.current.getBoundingClientRect().top + document.documentElement.scrollTop - scrollOffset;
        break;
      case Navigation.Contact:
        y = contactSectionRef.current.getBoundingClientRect().top + document.documentElement.scrollTop - scrollOffset;
        break;
    }

    // scroll smoothly to selected target:
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }

  return (
    <div className='main'>
      <Header navigationFunction={navigate}/>
      <div className='sections'>
        <AboutMeSection startingPosition={{X: 450, Y: -100}} displayOffset={100} ref={aboutMeSectionRef}/>
        <ProjectsSection ref={projectsSectionRef}/>
        <ContactSection ref={contactSectionRef}/>
      </div>
    </div>
  );
}

// Defines header/nav-bar
const Header = ({navigationFunction}) => {
  return (
    <div className='header'>
      <div className='header-title'>
        <p>BRADLEY BUDACH</p>
        <div className='header-buttons'>
          <p onClick={() => {navigationFunction(Navigation.AboutMe)}}>About Me</p>
          <p onClick={() => {navigationFunction(Navigation.Projects)}}>Projects</p>
          <p onClick={() => {navigationFunction(Navigation.Contact)}}>Contact Me</p>
        </div>
      </div>
      <StarsHeader/>
    </div>
  )
}

export default App;
