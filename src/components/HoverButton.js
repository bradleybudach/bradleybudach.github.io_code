import React, { useState } from 'react';
import '../styles/HoverButton.css'

const HoverButton = ({text, link, target, width, style, buttonOverride}) => {
    // button override lets an outside source handle the hover and on-click (button functionality). Holds isHovering info
    const [isHovering, setIsHovering] = useState((buttonOverride !== undefined) ? buttonOverride : false); // is this component being hovered

    return (
        <div onClick={() => {
            if (!buttonOverride && link !== undefined) {
                window.open(link, target)
            }
        }} 
        className='button-container' 
        onMouseEnter={() => {
            if (!buttonOverride) {
                setIsHovering(true)
            }
        }} 
        onMouseLeave={() => {
            if (!buttonOverride) {
                setIsHovering(false)
            }
        }} 
        style={{...style, width: width, minWidth: width}}>
            <button className='details-button' style={{paddingRight: (isHovering || buttonOverride) ? 30 : 0}}>{text}</button>
            <div id='b1' style={{transform: (isHovering || buttonOverride) ? 'translate(-15px, 0px)' : 'translate(0px, 0px)'}}/>
            <div id='b2' style={{transform: (isHovering || buttonOverride) ? 'translate(15px, 0px)' : 'translate(0px, 0px)'}}/>
            <div id='arrow' style={{transform: (isHovering || buttonOverride) ? `translate(${width/2-30}px, 0px)` : `translate(${width/2+30}px, 0px)`}}>{'\u2BC8'}</div>
        </div>
    );
};

export default HoverButton;