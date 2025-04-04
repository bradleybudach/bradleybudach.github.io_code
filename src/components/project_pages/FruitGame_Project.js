import ProjectPage from "./ProjectPage";
import { LanguageDictionary } from "../Projects";
import HoverButton from "../HoverButton";
import FadeInWrapper from "../FadeInWrapper";
import { images } from "../Images";

const languageList = [LanguageDictionary.hmtl, LanguageDictionary.css, LanguageDictionary.javascript];
const githubLink = 'https://github.com/bradleybudach/WatermelonGame';

const FruitGame_Project = () => {

    return (
        <ProjectPage title={'Fruit Game'} languageList={languageList} githubLink={githubLink} additionalButton={<HoverButton text={'Play The Game!'} link={'https://bradleybudach.github.io/WatermelonGame/'} target={'_blank'} width={250} style={{margin: 20}} colors={{main: 'rgba(20, 200, 80, 0.5)'}}/>}>
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
                        <img src={images['fruit_game.png']} alt='Fruit Game main screen' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                        <img src={images['fruit_game2.png']} alt='Fruit Game alternate screen' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
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
                        <img src={images['fruit_game_watermelon.png']} alt='Fruit Game screen showing watermelon fruit' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                        <img src={images['fruit_game_over.png']} alt='Game over screen for fruit game' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
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
        </ProjectPage>
    );
}



export default FruitGame_Project;