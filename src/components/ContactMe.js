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
                            <button className='socials-button' onClick={() => {window.open('https://codepen.io/budachb', '_blank')}}>
                                <svg fill="#000000" width={50} height={50} viewBox="0 0 512 512"><g> <g> <path d="M256.002,0.5C114.889,0.5,0.5,114.891,0.5,256.002C0.5,397.115,114.889,511.5,256.002,511.5 c141.109,0,255.498-114.385,255.498-255.498C511.5,114.891,397.111,0.5,256.002,0.5z M256.002,469.541 c-117.747,0-213.538-95.795-213.538-213.539c0-117.742,95.792-213.538,213.538-213.538c117.744,0,213.535,95.796,213.535,213.538 C469.537,373.746,373.746,469.541,256.002,469.541z M413.859,206.098c-0.027-0.199-0.078-0.39-0.111-0.589 c-0.066-0.384-0.137-0.767-0.236-1.14c-0.059-0.225-0.143-0.44-0.213-0.656c-0.107-0.333-0.217-0.665-0.348-0.989 c-0.094-0.224-0.201-0.448-0.305-0.664c-0.143-0.309-0.291-0.607-0.461-0.897c-0.125-0.217-0.258-0.425-0.387-0.632 c-0.182-0.283-0.369-0.558-0.574-0.823c-0.148-0.2-0.307-0.398-0.465-0.591c-0.215-0.248-0.439-0.498-0.678-0.73 c-0.178-0.183-0.354-0.365-0.539-0.532c-0.25-0.224-0.508-0.441-0.77-0.647c-0.203-0.158-0.402-0.316-0.615-0.466 c-0.078-0.05-0.148-0.116-0.223-0.167l-144.404-96.269c-4.563-3.041-10.501-3.041-15.063,0l-144.403,96.269 c-0.075,0.051-0.146,0.117-0.224,0.167c-0.213,0.149-0.412,0.308-0.611,0.466c-0.266,0.206-0.524,0.424-0.768,0.647 c-0.192,0.167-0.366,0.35-0.544,0.532c-0.237,0.232-0.46,0.482-0.673,0.73c-0.162,0.192-0.32,0.391-0.469,0.591 c-0.199,0.266-0.392,0.54-0.57,0.823c-0.137,0.207-0.265,0.415-0.39,0.632c-0.167,0.29-0.316,0.589-0.462,0.897 c-0.104,0.216-0.211,0.44-0.303,0.664c-0.133,0.324-0.241,0.656-0.35,0.989c-0.071,0.216-0.149,0.432-0.211,0.656 c-0.101,0.373-0.167,0.756-0.238,1.14c-0.032,0.199-0.083,0.39-0.107,0.589c-0.08,0.582-0.125,1.172-0.125,1.771v96.269 c0,0.598,0.045,1.188,0.125,1.779c0.025,0.191,0.075,0.39,0.107,0.58c0.071,0.384,0.137,0.766,0.238,1.14 c0.063,0.225,0.141,0.44,0.211,0.656c0.109,0.332,0.217,0.665,0.35,0.997c0.092,0.226,0.199,0.441,0.303,0.657 c0.146,0.307,0.295,0.605,0.462,0.905c0.125,0.209,0.252,0.415,0.39,0.623c0.179,0.283,0.371,0.558,0.57,0.824 c0.149,0.207,0.307,0.397,0.469,0.589c0.213,0.249,0.437,0.499,0.673,0.732c0.179,0.182,0.353,0.364,0.544,0.529 c0.244,0.227,0.502,0.442,0.768,0.65c0.199,0.158,0.398,0.315,0.611,0.465c0.078,0.05,0.149,0.116,0.224,0.166l144.403,96.27 c2.281,1.52,4.908,2.285,7.534,2.285c2.621,0,5.248-0.766,7.529-2.285l144.404-96.27c0.074-0.05,0.145-0.116,0.223-0.166 c0.213-0.149,0.412-0.307,0.615-0.465c0.262-0.208,0.52-0.424,0.77-0.65c0.186-0.165,0.361-0.348,0.539-0.529 c0.238-0.233,0.463-0.483,0.678-0.732c0.158-0.191,0.316-0.382,0.465-0.589c0.205-0.267,0.393-0.541,0.574-0.824 c0.129-0.208,0.262-0.414,0.387-0.623c0.17-0.3,0.318-0.599,0.461-0.905c0.104-0.216,0.211-0.432,0.305-0.657 c0.131-0.332,0.24-0.665,0.348-0.997c0.07-0.216,0.154-0.432,0.213-0.656c0.1-0.374,0.17-0.756,0.236-1.14 c0.033-0.19,0.084-0.389,0.111-0.58c0.074-0.591,0.121-1.182,0.121-1.779v-96.269C413.98,207.27,413.934,206.68,413.859,206.098z M269.578,136.971l106.377,70.913l-47.516,31.788l-58.861-39.375V136.971z M242.423,136.971v63.326l-58.859,39.375l-47.52-31.788 L242.423,136.971z M125.175,233.282l33.968,22.72l-33.968,22.722V233.282z M242.423,375.034l-106.379-70.915l47.52-31.778 l58.859,39.367V375.034z M256.002,288.122l-48.022-32.12l48.022-32.12l48.018,32.12L256.002,288.122z M269.578,375.034v-63.326 l58.861-39.367l47.516,31.778L269.578,375.034z M386.826,278.724l-33.965-22.722l33.965-22.72V278.724z"></path></g></g></svg>
                            </button>
                            <div className='tooltip'>Codepen</div>
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