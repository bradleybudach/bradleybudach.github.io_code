import { useEffect, useState, useRef } from "react";
import { throttle } from "lodash";

const FadeInWrapper = ({ children, fadeInDuration = 0.8, className, style }) => {
    const [fadeIn, setFadeIn] = useState(false); 
    const containerRef = useRef(null);

    const handleScroll = throttle(() => {
        if (!containerRef) {return;}
        const scrollPos = window.scrollY+window.innerHeight/2; // current position on page
        const yPos = containerRef.current.offsetTop;

        if (scrollPos > yPos) {
            setFadeIn(true);
        } else {
            setFadeIn(false);
        }
    }, 200);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {passive: true});

        // Remove event listeners on unmount: 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <div ref={containerRef} className={`${className}`} style={{transition: `${fadeInDuration}s`, opacity: fadeIn ? 100 : 0, transform: fadeIn ? 'translate3d(0, 0, 0)' : 'translate3d(0, 60px, 0)', ...style}}>
            {children}
        </div>
    );
};

export default FadeInWrapper;