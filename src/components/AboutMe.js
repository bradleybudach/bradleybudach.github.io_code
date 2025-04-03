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
                    Hi! My name is Bradley Budach. I have had a passion for programming from a young age. 
                    This passion has encouraged me to seek out new knowledge, experiment with new languages and projects, and pursue my degree in Computer Science.
                    I am currently a Senior at Winona State University earning my Bachelor's Degree in Computer Science with a 4.0 GPA.
                    I have experience working on both personal projects, and professionally making projects for a Geospatial Services as an intern. 
                    I also have experience teaching others Computer Science skills as a CS Tutor for Winona State University.
                    With this experience, my degree, years of self-taught programming skills, and my willingness to always be creative and learn new things, I am the perfect canidate for a Software Development position.
                </p></div>
            </div>
        </div>
    );
});

export default AboutMeSection;