import React, { useRef, useEffect, useState } from 'react';
import '../styles/StarBackground.css';
import { throttle } from 'lodash';
import useHeight from './useHeight';

const StarsBackground = () => {
    const background = useRef(null);
    const height = useHeight(background);
    const [stars, setStars] = useState([]); // shooting stars to appar over the webpage

    useEffect(() => {
        const starCount = parseInt((height*visualViewport.width)/25000);

        let newStars = [];
        for (let i = 0; i < starCount; i++) { // generates height/50 shooting stars:
            if (i % 3 == 0) {
                newStars[i] = <ShootingStar key={i} pageHeight={height}/>;
            } else {
                newStars[i] = <Star key={i} pageHeight={height}/>;
            }
        }

        setStars(newStars);
    }, [height]);


    return (
        <div className='star-background' ref={background}>
            {stars}
        </div>
    );
};

// Defines unmoving star for background
const Star = ({pageHeight}) => {
    const pos = useRef({});
    const [opacity, setOpacity] = useState(0.5);

    const [xPos, setXPos] = useState(pos.X);
    const [yPos, setYPos] = useState(pos.Y);

    useEffect(() => { // refresh on page height update
        setOpacity(0); // hide stars while moving
        setTimeout(() => {setOpacity(0.5)}, 100);

        // get star position: 
        const pos = {  // random start loc:
            X: Math.floor(Math.random()*visualViewport.width-5), 
            Y: Math.floor(Math.random()*pageHeight-100)
        };

        pos.current = pos;

        // set starting position:
        setXPos(pos.X);
        setYPos(pos.Y);
    }, [pageHeight]);

    // returns star with small variation in animation transition timing:
    return (
        <div className='fixed-star' style={{
        opacity: opacity,
        transition: (opacity == 0) ? '0s' : 'ease-out ' + (Math.random()*0.5+0.5) + 's',
        left: xPos, 
        top: yPos
        }}/>
    );
}

// Defines shooting star for background
const ShootingStar = ({pageHeight}) => {
    // Position states
    const startPosition = useRef({});
    const endPosition = useRef({});
    
    const [xPos, setXPos] = useState(startPosition.X);
    const [yPos, setYPos] = useState(startPosition.Y);
    const [opacity, setOpacity] = useState(0.5);

    const handleScroll = throttle(() => {
        if (!startPosition.current.X || !endPosition.current.X) {
            return;
        }

        const scrollPos = window.scrollY+window.innerHeight; // current position on page
        const viewportHeight = visualViewport.height;

        const startPos = startPosition.current.Y-viewportHeight; // start positon corrected by start offset
        const endPos = startPosition.current.Y+viewportHeight; // end pos corrected with scroll length

        if (scrollPos >= startPos && scrollPos <= endPos) {
            // get distance between start and end
            const differenceX = startPosition.current.X-endPosition.current.X;
            const differenceY = startPosition.current.Y-endPosition.current.Y;

            const scaleFactor = (viewportHeight-(endPos-scrollPos))/viewportHeight; // factor based on scroll to determine animation position

            setXPos(startPosition.current.X+(differenceX*scaleFactor));
            setYPos(startPosition.current.Y+(differenceY*scaleFactor));
        }
    }, 200); // throttle to 200ms for performance

    useEffect(() => { // refresh on page height update
        setOpacity(0); // hide stars while moving
        setTimeout(() => {setOpacity(0.5)}, 100);

        // get star position: 
        const startPos = {  // random start loc:
            X: Math.floor(Math.random()*visualViewport.width-5), 
            Y: Math.floor(Math.random()*pageHeight-100)
        };

        const endPos = { // random end loc within 200px of start:
            X: startPos.X + Math.floor(Math.random()*200)-100,
            Y: startPos.Y + Math.floor(Math.random()*200)-100,
        }

        startPosition.current = startPos;
        endPosition.current = endPos;

        // set starting position:
        setXPos(startPos.X);
        setYPos(startPos.Y);

        // Event Listeners:
        window.addEventListener('scroll', handleScroll, { passive: true }); // scroll animations

         // remove listeners on unmount
         return () => {
             window.removeEventListener('scroll', handleScroll);
           }
    }, [pageHeight]);

    // returns star with small variation in animation transition timing:
    return (
        <div className='shooting-star' style={{
        transition: (opacity == 0) ? '0s' : 'ease-out ' + (Math.random()*0.5+0.5) + 's',
        left: xPos, 
        top: yPos,
        opacity: opacity
        }}/>
    );

}


export default StarsBackground;