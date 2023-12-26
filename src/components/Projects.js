import React, { useRef, useEffect, useState, forwardRef } from 'react';
import AnimatedStar from './AnimatedStar';
import '../styles/Projects.css';
import '../styles/Theme.css';
import { throttle } from 'lodash';
import { useNavigate } from 'react-router-dom';

// Dictionary for possible languages to display on projects
const LanguageDictionary = {
    hmtl: {color: '#D2B48C', text: 'HTML'},
    css: {color: '#ADD8E6', text: 'CSS'},
    javascript: {color: '#FFA500', text: 'JS'},
    java: {color: '#964B00', text: 'Java'},
    react: {color: '#800000', text: 'React'},
    reactNative: {color: '#CC7000', text: 'React Native'},
    cSharp: {color: '#CC8899', text: 'C#'},
    cPlusPlus: {color: '#00578A', text: 'C++'},
    WPF: {color: '#301934', text: 'WPF'},
    python: {color: '#FFFF00', text: 'Python'},
};

// forwards ref of title back to navigation to allow for scrolling to this section
const ProjectsSection = forwardRef((props, ref) => {
    const starTarget = useRef(null); // Ref used for AnimatedStar
    const [isComponentVisible, setIsComponentVisible] = useState(false); // visibility used for appearance animations

    // callback function from AnimatedStar
    const starAnimEvent = (visibility) => { 
        setIsComponentVisible(visibility);
    };

    return (
        <div className='section-container' ref={ref}>
            <AnimatedStar targetRef={starTarget} startOffset={{X: 200, Y: 50}} animationStartOffset={50} scrollLength={300} callbackRef={starAnimEvent}/>
            <div className='title-container' ref={starTarget}>
                <div className='title-border' style={{
                    visibility: (isComponentVisible) ? 'visible' : 'hidden',
                    width: (isComponentVisible) ? 200 : 0,
                    transitionDelay: (isComponentVisible) ? '0.5s' : '0s',
                }}>
                    <h2 className='section-title'>PROJECTS</h2>
                </div>
            </div>

            <div className='projects-container' style={{opacity: (isComponentVisible) ? 1 : 0, transitionDelay: (isComponentVisible) ? '0.5s' : '0s'}}>
                <Project 
                    title={'Digital Level'} 
                    description={'Integrating both hardware and software using a Circuit Playground, this level uses an accelerometer and LEDs to efficiently measure and indicate the flatness of a surface.'} 
                    imgSrc={'/images/level_project.png'}
                    languageList={[LanguageDictionary.cPlusPlus, LanguageDictionary.python]}
                    route={'/Project1'}/>
                <Project 
                    title={'Project Title'} 
                    description={'This is a description for the project. Testing for word warp and other such stuff that is pretty important.'} 
                    imgSrc={'/images/project1.png'}
                    languageList={[LanguageDictionary.hmtl, LanguageDictionary.css, LanguageDictionary.javascript]}
                    route={'/Project1'}/>
                <Project 
                    title={'Project Title'} 
                    description={'This is a description for the project. Testing for word warp and other such stuff that is pretty important.'} 
                    imgSrc={'/images/project1.png'}
                    languageList={[LanguageDictionary.hmtl, LanguageDictionary.css, LanguageDictionary.javascript]}
                    route={'/Project1'}/>
                <Project 
                    title={'Project Title'} 
                    description={'This is a description for the project. Testing for word warp and other such stuff that is pretty important.'} 
                    imgSrc={'/images/project1.png'}
                    languageList={[LanguageDictionary.hmtl, LanguageDictionary.css, LanguageDictionary.javascript]}
                    route={'/Project2'}/>
            </div>
        </div>
    );
});

// Project Component
const Project = ({title, description, imgSrc, languageList, route}) => {
    const navigate = useNavigate(); // navigate to project page
    const [rotation, setRotation] = useState({}); // rotation for 3d effect
    const [isHovering, setIsHovering] = useState(false); // is this component being hovered

    // mouse move listener, throttled to 100ms for performance
    const handleMouseMove = throttle((event) => {
        if (!event.currentTarget) { // make sure component has loaded
            return;
        }

        const rect = event.currentTarget.getBoundingClientRect(); // get element

        const x = event.clientX - rect.left-(event.currentTarget.offsetWidth/2); // X position relative to center
        const y = -(event.clientY - rect.top-(event.currentTarget.offsetHeight/2)); // Y position relative to center

        setRotation({
            X: (y / event.currentTarget.offsetHeight/2).toFixed(2),
            Y: (x / event.currentTarget.offsetWidth/2).toFixed(2) 
        });
    }, 100);


    const handleMouseLeave = () => {
        // reset rotation
        setRotation({
            X: 0,
            Y: 0
          });

        setIsHovering(false);
    };

    const routeToProject = () => {
        navigate(route);
    };

    return (
        <div className='project' 
            onClick={routeToProject} 
            onMouseEnter={() => {setIsHovering(true)}} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave} 
            style={{transform: `rotateX(${rotation.X}deg) rotateY(${rotation.Y}deg)`}}>
                <h3 className='project-title'>{title}</h3>
                <img src={imgSrc} alt='Project Image'/>
                <p className='description-text'>{description}</p>

                <div className='project-bottom-section'>
                    <div className='language-container'>
                        {
                            languageList.map(language => {
                                return (
                                    <div key={language.text} className='language-display'>
                                        <div className='language-color' style={{backgroundColor: language.color}}/>
                                        {language.text}
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    <div className='button-container'>
                        <button className='details-button' style={{paddingRight: (isHovering) ? 30 : 0}}>{'View Details'}</button>
                        <div id='b1' style={{transform: (isHovering) ? 'translate(-15px, 0px)' : 'translate(0px, 0px)'}}/>
                        <div id='b2' style={{transform: (isHovering) ? 'translate(15px, 0px)' : 'translate(0px, 0px)'}}/>
                        <div id='arrow' style={{transform: (isHovering) ? 'translate(50px, 0px)' : 'translate(100px, 0px)'}}>{'\u2BC8'}</div>
                    </div>
                </div>
        </div>
    );
}


export default ProjectsSection;