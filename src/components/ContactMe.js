import React, { useRef, useEffect, useState, forwardRef } from 'react';
import AnimatedStar from './AnimatedStar';
import '../styles/Contact.css';
import '../styles/Theme.css';

const ContactSection = forwardRef((props, ref) => {
    const starTarget = useRef(null); // Ref used for AnimatedStar
    const [isComponentVisible, setIsComponentVisible] = useState(false); // visibility used for appearance animations

    // callback function from AnimatedStar
    const starAnimEvent = (visibility) => { 
        setIsComponentVisible(visibility);
    };

    return <div className='section-container' ref={ref}>
        <AnimatedStar targetRef={starTarget} startOffset={{X: 0, Y: -150}} animationStartOffset={50} scrollLength={300} callbackRef={starAnimEvent}/>
        <div className='title-container' ref={starTarget}>
        <div className='title-border' style={{
                visibility: (isComponentVisible) ? 'visible' : 'hidden',
                width: (isComponentVisible) ? 200 : 0,
                transitionDelay: (isComponentVisible) ? '0.5s' : '0s',
            }}>
                <h2 className='section-title'>CONTACT ME</h2>
            </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
});

export default ContactSection;