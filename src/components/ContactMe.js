import React, { useRef, useState, forwardRef } from 'react';
import AnimatedStar from './AnimatedStar';
import '../styles/Contact.css';
import '../styles/Theme.css';
import HoverButton from './HoverButton';

// forwards ref of title back to navigation to allow for scrolling to this section
const ContactSection = forwardRef((props, ref) => {
    const starTarget = useRef(null); // Ref used for AnimatedStar
    const [isComponentVisible, setIsComponentVisible] = useState(false); // visibility used for appearance animations
    
    // States for user entered text:
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    // callback function from AnimatedStar
    const starAnimEvent = (visibility) => { 
        setIsComponentVisible(visibility);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form from refreshing page
        window.location.href = `mailto:bbudach7@gmail.com?subject=${name}&body=${message}`; // open email client
    };

    return (
        <div className='section-container' ref={ref}>
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

            <div className='contact-info' style={{opacity: (isComponentVisible) ? 1 : 0, transitionDelay: (isComponentVisible) ? '0.5s' : '0s'}}>
                <form className='contact-form' onSubmit={handleSubmit}>
                    <h2>Want to send me a message?</h2>
                    <label>NAME:</label><br/>
                    <input title='name' name='name' type="text" value={name} onChange={(e) => setName(e.target.value)}/><br/>
                    <label>MESSAGE:</label><br/>
                    <textarea title='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)}/><br/>
                    <HoverButton text={'Email Me'} width={170}/>
                    <br/>
                </form>
            </div>
        </div>
    );
});

export default ContactSection;