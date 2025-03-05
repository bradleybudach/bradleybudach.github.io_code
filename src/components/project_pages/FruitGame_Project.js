import React, { useEffect } from 'react';
import '../../styles/Theme.css';
import '../../styles/ProjectPage.css';
import { LanguageDictionary } from '../Projects';
import HoverButton from '../HoverButton';
import { images } from '../Images';
import FadeInWrapper from '../FadeInWrapper';

const languageList = [LanguageDictionary.hmtl, LanguageDictionary.css, LanguageDictionary.javascript];
const githubLink = 'https://github.com/bradleybudach/WatermelonGame';

const FruitGame_Project = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // scroll to top on load


    return (
    <>
    <div className='project-container'>
        <FadeInWrapper className='project-header'>
            <h1>Fruit Game</h1>
            <div className='language-cont'>
                {
                    languageList.map(language => {
                        return (
                            <div key={language.text} className='language-display'>
                                <div className='language-color' style={{background: language.color}}/>
                                {language.text}
                            </div>
                        )
                    })
                }
            </div>

            <div className='tooltip-button'>
                <button className='github-button' onClick={() => {window.open(githubLink, '_blank')}}>
                    <svg width={50} height={50} viewBox='0 0 16 16'>
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                </button>
                <div className='tooltip'>View Source on GitHub</div>
            </div>
            
        </FadeInWrapper>
        <div className='project-body'>
            <FadeInWrapper className='center-container'>
                <HoverButton text={'Play The Game!'} link={'https://bradleybudach.github.io/WatermelonGame/'} target={'_blank'} width={250} style={{margin: 20}} colors={{main: 'rgba(20, 200, 80, 0.5)'}}/>
            </FadeInWrapper>

            <FadeInWrapper className='side-by-side rev'>
                <div className='project-text-container'>
                    <h3>OVERVIEW</h3>
                    <p>
                        This was a fun project I decided to work on in my free time. I had played a similar mobile game and enjoyed it, but it was plagued with ads, so I thought why not make my own version.
                        This project was made for the web with mobile in mind as I was trying to emulate a similar feel to the mobile game. After some research I decided to use Pixi JS for the visuals because it was a canvas graphics framework that seemed pretty easy to work with.
                        As I began to work on the game I realized I would need physics. Not wanting to write collider code and physics for complex objects myself, I found another framework, Matter JS, to handle the physics.
                        The combination of the two essentially gave me my own 2D game engine to do whatever I wanted with. 
                        Building the game from the ground up was a lot of fun. I even made all the art myself in Adobe Illustrator.
                        Completing this project was very rewarding, especially when I got to see other people play and enjoy it.
                    </p>
                </div>
                
                <div style={{flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center'}}>
                        <img src={images['fruit_game.png']} alt='Wetland Code Interpreter ArcGIS Pro AddIn' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                        <img src={images['fruit_game2.png']} alt='Wetland Code Interpreter App GUI screenshot showing home screen' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                </div>
            </FadeInWrapper>
            
            <FadeInWrapper className='project-content-container'>
                <h3>CHALLENGES</h3>
                <p>There were some good challenges with implementing this project. The biggest one being implementing both the graphics framework and physics engine to control the game.</p>
                <ul>
                    <li>Making a class to sync up physics objects with graphics objects so each object can handle it's own physics and rendering across the frameworks</li>
                    <li>Implementing controls that would work on both mouse and keyboard, and touch</li>
                    <li>Designing a 2D game that would scale properly to fit on mobile devices and PC</li>
                    <li>Tweaking physics to make the game feel fair and satisfying to play</li>
                    <li>Using the physics engine to design custom hitboxes to match the shape of the sprites</li>
                    <li>Writing scripts to create a temporary debugging mode to see exactly what physics objects were doing with wireframes</li>
                </ul>
            </FadeInWrapper>

            <FadeInWrapper className='side-by-side'>
                <div style={{flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center'}}>
                        <img src={images['fruit_game_watermelon.png']} alt='Wetland Code Interpreter App GUI screenshot showing parsed code' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                        <img src={images['fruit_game_over.png']} alt='Wetland Code Interpreter App GUI screenshot showing invalid code message' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                </div>
                <div className='project-text-container'>
                    <h3>LESSONS LEARNED</h3>
                    <p>
                        I learned a lot from making this game. What started as a simple project to play a game I enjoyed without all the ads, turned into a big learning experience in physics and graphics programming.
                        This project felt like a puzzle to put together. Integrating the physics engine with the graphics framework was both complex and satisfying.
                        There's a lot more that goes into making a game than just the functionality. Making smooth controls and clear visuals is just as important as the game underneath.
                        Overall this project improved my skills in web development and scripting as well as visuals and design.
                    </p>
                </div>
            </FadeInWrapper>
        </div>

        <div className='project-buttons'>
            <HoverButton text={'Back To Projects'} link={'/'} navigate={true} width={200} style={{margin: 20}} colors={{main: 'rgba(255, 83, 73, 0.5)'}}/>

            <HoverButton text={'Play The Game!'} link={'https://bradleybudach.github.io/WatermelonGame/'} target={'_blank'} width={250} style={{margin: 20}} colors={{main: 'rgba(20, 200, 80, 0.5)'}}/>

            <HoverButton text={'Source Code'} link={githubLink} target={'_blank'} width={170} style={{margin: 20}}/>
        </div>
        
    </div>

    <div className='footer'>
        <p style={{margin: 5, padding: 0}}>&copy; Bradley Budach 2023</p>
    </div>
    </>
    );
}



export default FruitGame_Project;