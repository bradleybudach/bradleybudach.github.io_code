import { useEffect, useState, useRef } from "react";
import '../styles/AnimatedStar.css';
import { throttle } from "lodash";

const AnimatedStar = ({targetRef, startOffset, animationStartOffset, scrollLength, callbackRef}) => {
    const targetPosition = useRef({}); // target component position ref
    const startPosition = useRef({}); // starting positon ref
    const isEnded = useRef(false); // stores isEnded as ref so it can be seen inside handleScroll to prevent further calls to callbackRef
    const [currentPosition, setCurrentPosition] = useState({X: startPosition.current.X, Y: startPosition.current.Y}); // current position for animation
    const [starVisible, setStarVisible] = useState(true); // visibility

    // finds the position of the target element and sets state:
    const getTargetPosition = () => {
        if (!targetRef) { // await target ref
            return;
        }

        const componentWidth = targetRef.current.offsetWidth;

        targetPosition.current = {
            X: targetRef.current.getBoundingClientRect().left + document.documentElement.scrollLeft+(componentWidth/2), // target x position corrected to center
            Y: targetRef.current.getBoundingClientRect().top + document.documentElement.scrollTop, // target y position
        };

        // calculates starting position based on target+offsets
        startPosition.current = {
            X: targetPosition.current.X + startOffset.X,
            Y: targetPosition.current.Y + startOffset.Y
        };
    }

    // update target position on window resize:
    const handleWindowResize = throttle(() => {
        if (!targetRef) { // await target ref
            return;
        }

        getTargetPosition();
    }, 100); // throttle to 100ms for performance

    const handleScroll = () => {
        const scrollPos = window.scrollY+window.innerHeight; // current position on page

        const startPos = targetPosition.current.Y-animationStartOffset; // start positon corrected by start offset
        const endPos = startPos+scrollLength; // end pos corrected with scroll length
        
        if (scrollPos >= startPos && scrollPos <= endPos) { // between start and end position
            if (isEnded.current) { // only runs once if it was previously ended, sends callback
                isEnded.current = false;
                setStarVisible(true);
                callbackRef(false);
            }
            
            // distance from start to target:
            const distanceX = targetPosition.current.X-startPosition.current.X; 
            const distanceY = targetPosition.current.Y-startPosition.current.Y;
            
            const positionFactor = (scrollLength-(endPos-scrollPos))/scrollLength; // gets percentage of distance between start and end for animation

            // animate star:
            setCurrentPosition({
                X: startPosition.current.X + distanceX*positionFactor,
                Y: startPosition.current.Y + distanceY*positionFactor
            });
        } else if (scrollPos >= endPos) { // > end position
            if (!isEnded.current) {// only runs once if not already ended, sends completion callback
                isEnded.current = true;
                setStarVisible(false);
                callbackRef(true);
            }
        }
    };

    useEffect(() => {
        // Add Event listeners:
        window.addEventListener('scroll', handleScroll, {passive: true});
        window.addEventListener('resize', handleWindowResize);

        while (!targetRef) { continue; } // wait for target ref to load
        getTargetPosition();

        // Remove event listeners on unmount: 
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [targetRef]);

    return (
        <div className="star" style={{
            top: currentPosition.Y,
            left: currentPosition.X,
            visibility: (starVisible) ? 'visible' : 'hidden',
            maxHeight: (starVisible) ? 10 : 0,
            transition: 'ease-out all 0.5s, max-height 0s ' + ((starVisible) ? '0s' : '0.5s'),
        }}/>
    );
};

export default AnimatedStar;