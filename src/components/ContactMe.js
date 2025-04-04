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

            <div className='contact-container' style={{opacity: (isComponentVisible) ? 1 : 0, transitionDelay: (isComponentVisible) ? '0.5s' : '0s'}}>
                <div className='contact-info justify-right' style={{flex: 2}}> 
                    <form className='contact-form' onSubmit={handleSubmit}>
                        <h2>Send me a message</h2>
                        <label>NAME:</label><br/>
                        <input title='name' name='name' type="text" value={name} onChange={(e) => setName(e.target.value)}/><br/>
                        <label>MESSAGE:</label><br/>
                        <textarea title='message' name='message' value={message} onChange={(e) => setMessage(e.target.value)}/><br/>
                        <HoverButton text={'Email Me'} width={170}/>
                        <br/>
                    </form>
                </div>
                <div className='contact-info justify-left'>
                    <div className='socials-container'>
                        <h2>SOCIALS</h2>
                        <div className='tooltip-button'>
                            <button className='socials-button' onClick={() => {window.open('https://www.linkedin.com/in/bradley-budach-6764262a3/', '_blank')}}>
                                <svg fill="#000000" viewBox="-143 145 512 512" width={50} height={50}><g><g><path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path><rect x="-8.5" y="348.4" width="49.9" height="159.7"></rect><path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7 C45.1,284.9,33.8,273,15.4,273z"></path> <path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1 c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"></path></g></g></svg>
                            </button>
                            <div className='tooltip'>LinkedIn</div>
                        </div>
                        
                        <div className='tooltip-button'>
                            <button className='socials-button' onClick={() => {window.open('https://github.com/bradleybudach', '_blank')}}>
                                <svg width={50} height={50} viewBox='0 0 16 16'><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg>
                            </button>
                            <div className='tooltip'>GitHub</div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
});

export default ContactSection;