import React, { useState } from 'react';
import '../styles/HoverButton.css'

const HoverButton = ({text, link, target, width, style, buttonOverride, colors}) => {
    // button override lets an outside source handle the hover and on-click (button functionality). Holds isHovering info
    const [isHovering, setIsHovering] = useState(false); // is this component being hovered

    return (
        <div onClick={() => {
            if (buttonOverride === undefined && link !== undefined) {
                window.open(link, target)
            }
        }} 
        className='button-container' 
        onMouseEnter={() => {
            if (buttonOverride === undefined) {
                setIsHovering(true)
            }
        }} 
        onMouseLeave={() => {
            if (buttonOverride === undefined) {
                setIsHovering(false)
            }
        }} 
        style={{...style, width: width, minWidth: width}}>
            <button className='details-button' style={{
                paddingRight: (isHovering || buttonOverride) ? 30 : 0,
                backgroundColor: (colors && colors.main) ? colors.main : 'rgba(254, 234, 0, 0.5)'
                }}>{text}</button>
            <div id='b1' style={{
                transform: (isHovering || buttonOverride) ? 'translate(-15px, 0px)' : 'translate(0px, 0px)',
                backgroundColor: (colors && colors.one) ? colors.one : 'red'
                }}/>
            <div id='b2' style={{
                transform: (isHovering || buttonOverride) ? 'translate(15px, 0px)' : 'translate(0px, 0px)',
                backgroundColor: (colors && colors.two) ? colors.two : 'orange'
                }}/>
            <div id='arrow' style={{
                transform: (isHovering || buttonOverride) ? `translate(${width/2-30}px, 0px)` : `translate(${width/2+30}px, 0px)`,
                color: (colors && colors.arrow) ? colors.arrow : 'white'
                }}>{'\u2BC8'}</div>
        </div>
    );
};

export default HoverButton;