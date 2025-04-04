import React, { useRef, useState, forwardRef } from 'react';
import '../styles/AboutMe.css';
import '../styles/Theme.css';
import AnimatedStar from './AnimatedStar';
import { images } from './Images';

// forwards ref of title back to navigation to allow for scrolling to this section
const AboutMeSection = forwardRef((props, ref) => {
    const starTarget = useRef(null); // Ref used for AnimatedStar
    const [isComponentVisible, setIsComponentVisible] = useState(false); // visibility used for appearance animations

    // callback function from AnimatedStar
    const starAnimEvent = (visibility) => { 
        setIsComponentVisible(visibility);
    };

    return (
        <div className='section-container' ref={ref}>
            <AnimatedStar targetRef={starTarget} startOffset={{X: 200, Y: -200}} animationStartOffset={0} scrollLength={250} callbackRef={starAnimEvent}/>
            <div className='title-container' ref={starTarget}>
                <div className='title-border' style={{
                    visibility: (isComponentVisible) ? 'visible' : 'hidden',
                    width: (isComponentVisible) ? 200 : 0,
                    transitionDelay: (isComponentVisible) ? '0.5s' : '0s'
                    }}>
                        <h2 className='section-title'>ABOUT ME</h2>
                </div>
            </div>
            
            <div className='content-container' style={{opacity: (isComponentVisible) ? 1 : 0, transitionDelay: (isComponentVisible) ? '0.5s' : '0s', transitionDuration: (isComponentVisible) ? '0.5s' : '0s',  backgroundColor: 'rgba(10, 10, 50, 0.8)', borderRadius: 10}}>
                <div className='img-container'>
                    <img src={images['profile.png']} alt='Profile'/>
                </div>
                <div style={{flex: 4}}><p>
                    Hi! My name is Bradley Budach. I have had a passion for programming from a young age. After first discovering visual block coding from a STEM class in 4th grade I knew I needed to learn more.
                    Ever since then I have been using internet resources to teach myself how to code, starting with web development, and branching into new directions from there.
                    This passion has encouraged me to seek out new knowledge, experiment with new languages and projects, and pursue my degree in Computer Science.
                    I am currently a Senior at Winona State University earning my Bachelor's Degree in Computer Science with a 4.0 GPA.
                    I have significant experience working on projects both personally, and professionally. As a GIS Intern at GeoSpatial Services, I created numerous tools and applications, contributing to greater efficiency across the company.
                    Working as a CS Tutor for Winona State University throughout my college career has reinforced my fundamental computer science knowledge, and improved my leadership and teaching skills.
                    With this experience, my degree, years of self-taught programming skills, and my willingness to always be creative and learn new things, I am the perfect candidate for a Software Development position.
                </p></div>
            </div>
        </div>
    );
});

export default AboutMeSection;