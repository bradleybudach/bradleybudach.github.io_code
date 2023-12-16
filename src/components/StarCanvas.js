import React, { useRef, useEffect, useState } from 'react';
import '../styles/StarCanvas.css';

const StarsHeader = props => {
  
    const canvasRef = useRef(null);
    const [stars, setStars] = useState([]);

    const refreshCanvas = () => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d');
        const displayWidth = visualViewport.width;
        const displayHeight = visualViewport.height;
        canvas.style.width = displayWidth + 'px';
        canvas.style.height =  displayHeight + 'px';
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        context.fillStyle = '#FFFFFF';

        for (let i = 0; i < displayWidth/20; i++) { // draw stars, scales with width (width/20):
            context.beginPath();
		    context.arc(Math.floor(Math.random()*displayWidth) + 1, Math.floor(Math.random()*displayHeight) + 1, 2, 0, Math.PI * 2, true);
            context.fill();
        }

        getStars(); // resets shooting stars
    }

    useEffect(() => {
        refreshCanvas(); // setup canvas

        // update canvas on screen resize:
        window.addEventListener('resize', refreshCanvas);
        
        // remove on unmount
        return () => {
            window.removeEventListener('resize', refreshCanvas);
          }
    }, []);

    const getStars = () => {
        /*const body = document.body;
        const html = document.documentElement;

        const fullPageHeight = Math.max(
            body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight
          );*/

        let stars = [];
        for (let i = 0; i < visualViewport.width/50; i++) {
            const startPos = {
                X: Math.floor(Math.random()*visualViewport.width-5), 
                Y: Math.floor(Math.random()*visualViewport.height-5)
            };

            const endPos = {
                X: startPos.X + Math.floor(Math.random()*200)-100,
                Y: startPos.Y + Math.floor(Math.random()*200)-100,
            }

            stars[i] = <ShootingStar key={i} startPosition={startPos} endPosition={endPos}/>;
        }

        setStars(stars);
    }

  return ( 
    <div className='header-container'>
        <h1 className='header-text'>SOFTWARE DEVELOPER</h1>
        <canvas className='header-canvas' ref={canvasRef} {...props}/>
        {stars}
    </div> 
    );

    
}

const ShootingStar = ({startPosition, endPosition}) => {
    const [xPos, setXPos] = useState(startPosition.X);
    const [yPos, setYPos] = useState(startPosition.Y);

    const handleScroll = () => {
        const differenceX = startPosition.X-endPosition.X;
        const differenceY = startPosition.Y-endPosition.Y;

        const scaleFactor =  Math.max(0, Math.min(100, window.scrollY/3))/100; // factor determines distance between start and end position for animation

        if (scaleFactor <= 1) {
            setXPos(startPosition.X+(differenceX*scaleFactor));
            setYPos(startPosition.Y+(differenceY*scaleFactor));
        }   
    }

    const refreshStars = () => {
        const displayWidth = visualViewport.width;
        const displayHeight = visualViewport.height;

        startPosition.X = Math.floor(Math.random()*displayWidth-5);
        startPosition.Y = Math.floor(Math.random()*displayHeight-5);

        endPosition.X = startPosition.X + Math.floor(Math.random()*200)-100;
        endPosition.Y = startPosition.Y + Math.floor(Math.random()*200)-100;

        setXPos(startPosition.X);
        setYPos(startPosition.Y);
    }

    useEffect(() => {
        // Event Listeners:
        window.addEventListener('scroll', handleScroll, { passive: true }); // scroll animations
        window.addEventListener('resize', refreshStars); // update stars on resize

         // remove listeners on unmount
         return () => {
             window.removeEventListener('resize', refreshStars);
             window.removeEventListener('scroll', handleScroll);
           }
    }, []);

    // returns star with small variation in animation transition timing:
    return <div className='shooting-star' style={{
        left: xPos, 
        top: yPos, 
        transition: 'ease-out ' + (Math.random()*0.5+0.5) + 's'
    }}/>

}

export default StarsHeader;