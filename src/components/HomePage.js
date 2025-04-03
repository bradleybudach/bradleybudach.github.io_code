import '../styles/HomePage.css';
import '../styles/Theme.css';
import AboutMeSection from './AboutMe';
import ProjectsSection from './Projects';
import ContactSection from './ContactMe';
import StarsBackground from './StarsBackground';
import { forwardRef, useEffect, useRef } from 'react';

// nav dictionary:
const Navigation = {
    AboutMe: "AboutMe",
    Projects: "Projects",
    Contact: "ContactMe"
};
  
const scrollOffset = 100; // offsets scroll position to be slighly above target for navigation

// Home page of the app, contains all main components
const HomePage = () => {
    // Navigation Refs:
    const aboutMeSectionRef = useRef(null);
    const projectsSectionRef = useRef(null);
    const contactSectionRef = useRef(null);
    const footerRef = useRef(null);

    const navigate = (target) => { // scroll to target components
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
            <StarsBackground/>
            <Header navigationFunction={navigate}/>
            <div className='sections'>
                <AboutMeSection ref={aboutMeSectionRef}/>
                <ProjectsSection ref={projectsSectionRef}/>
                <ContactSection ref={contactSectionRef}/>
                <Footer ref={footerRef}/>
            </div>
        </div>
    );
};
  
// Defines header/nav-bar:
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
            <div className='header-container'>
                <h1 className='header-text'>DEVELOPER PORTFOLIO</h1>
            </div>
        </div>
    );
};

// defines page footer
export const Footer = forwardRef((props, ref) => {
    return (
        <div className='footer' ref={ref}>
            <p>&copy; Bradley Budach 2025</p>
        </div>
    );
});

export default HomePage;