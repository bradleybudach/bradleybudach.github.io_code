import React, { useRef, useEffect, useState } from 'react';
import '../styles/StarCanvas.css';
import { throttle } from 'lodash';

const StarsHeader = ({pageHeight}) => {
    const canvasRef = useRef(null); // ref to canvas
    const [stars, setStars] = useState([]); // shooting stars to appar over the webpage

    const refreshCanvas = () => {
        if (!pageHeight) { // await page height reference
            return;
        }

        // set canvas values:
        const canvas = canvasRef.current
        const context = canvas.getContext('2d');
        const displayWidth = visualViewport.width;
        const displayHeight = pageHeight+200;
        canvas.style.width = '100%';
        canvas.style.height =  displayHeight + 'px';
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        context.fillStyle = '#FFFFFF';

        for (let i = 0; i < displayHeight/15; i++) { // draw stars, scales with width (width/20):
            context.beginPath();
		    context.arc(Math.floor(Math.random()*displayWidth) + 1, Math.floor(Math.random()*displayHeight) + 1, 2, 0, Math.PI * 2);
            context.fill();
        }

        getStars(pageHeight);
    }

    useEffect(() => { // refresh canvas if page size changes
        refreshCanvas(); 
    }, [pageHeight]);

    const getStars = (pageHeight) => {
        // generate/update stars based on page height
        let newStars = [];
        for (let i = 0; i < pageHeight/50; i++) { // generates height/50 shooting stars:
            newStars[i] = <ShootingStar key={i} pageHeight={pageHeight}/>;
        }

        setStars(newStars);
    }

    return (<> 
        <div className='header-container'>
            <h1 className='header-text'>DEVELOPER PORTFOLIO</h1>
        </div> 
        <div className='stars-container'>
            <canvas className='header-canvas' ref={canvasRef}/>
            {stars}
        </div>
        </>
    );

    
}

// Defines shooting star for canvas
const ShootingStar = ({pageHeight}) => {
    // Position states
    const startPosition = useRef({});
    const endPosition = useRef({});
    
    const [xPos, setXPos] = useState(startPosition.X);
    const [yPos, setYPos] = useState(startPosition.Y);

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
        left: xPos, 
        top: yPos, 
        transition: 'ease-out ' + (Math.random()*0.5+0.5) + 's'
        }}/>
    );

}

export default StarsHeader;