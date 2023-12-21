import '../styles/HomePage.css';
import '../styles/Theme.css';
import StarsHeader from './StarCanvas';
import AboutMeSection from './AboutMe';
import ProjectsSection from './Projects';
import ContactSection from './ContactMe';
import { useRef } from 'react';

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

    return (<>
        <Header navigationFunction={navigate}/>
        <div className='sections'>
            <AboutMeSection ref={aboutMeSectionRef}/>
            <ProjectsSection ref={projectsSectionRef}/>
            <ContactSection ref={contactSectionRef}/>
            <Footer/>
        </div>
    </>);
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
            <StarsHeader/>
        </div>
    );
};

// defines page footer
const Footer = () => {
    return (
        <div className='footer'>
            <p>&copy; Bradley Budach 2023</p>
        </div>
    );
}

export default HomePage;