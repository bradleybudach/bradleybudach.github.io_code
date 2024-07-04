import { useEffect, useState } from "react";

const FadeInWrapper = ({ children, startDelay, fadeInDuration = 0.8, className }) => {
    const [fadeIn, setFadeIn] = useState(false); 

    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true);
        }, startDelay*1000); // 5000 milliseconds = 5 seconds
    });


    return (
        <div className={`${className}`} style={{transition: `${fadeInDuration}s`, opacity: fadeIn ? 100 : 0, transform: fadeIn ? 'translate3d(0, 0, 0)' : 'translate3d(0, 60px, 0)'}}>
            {children}
        </div>
    );
};

export default FadeInWrapper;