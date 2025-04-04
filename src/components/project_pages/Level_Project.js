import ProjectPage from "./ProjectPage";
import { LanguageDictionary } from "../Projects";
import FadeInWrapper from "../FadeInWrapper";
import { images } from "../Images";

const languageList = [LanguageDictionary.cPlusPlus, LanguageDictionary.python];
const githubLink = 'https://github.com/bradleybudach/CircuitPlaygroundDigitalLevel';

const LevelProject = () => {
    return (
        <ProjectPage title={'Digital Level'} languageList={languageList} githubLink={githubLink}>
            <FadeInWrapper className='side-by-side rev'>
                <div className='project-text-container'>
                    <h3>OVERVIEW</h3>
                    <p>
                        I built this Level Project for a class where I learned how to program microcontrollers.
                        I built the level to be used on a Circuit Playground Microcontroller.
                        The Level makes use of the accelerometer built into the Circuit Playground to determine the angle it is facing, as well as the LED lights to indicate this angle to the user.
                        I did my best to harness the fact that it was a digital level, and create functionality that would not be possible with a traditional analog level.
                        The level could be set to measure for a specific angle, or save the angle of a surface to compare to another, or just left at the default to measure if a surface is flat.
                    </p>
                </div>
                
                <div style={{flex: 1, alignSelf: 'center'}}><img src={images['level_project.png']} alt='The Level Circuit'/></div>
            </FadeInWrapper>

            <FadeInWrapper className='image-container'>
                <img src={images['level_project.gif']} alt='Display of the level in action.' style={{width: '80%', maxWidth: '1000px'}}/>
            </FadeInWrapper>
            
            <FadeInWrapper className='project-content-container'> 
                <h3>CHALLENGES</h3>
                <ul>
                    <li>Dealing with the memory constraints of microcontroller</li>
                    <li>Changing language from Python to C++</li>
                    <li>Learning the math behind the angle calculation</li>
                    <li>Mapping spatial position data to the correct indicator lights</li>
                    <li>Creating intuitive user controls with only two buttons</li>
                    <li>Minimizing error in imperfect hardware</li>
                    <li>Smoothing calculation to prevent flickering lights</li>
                </ul>
            </FadeInWrapper>

            <FadeInWrapper className='side-by-side'>
                <div style={{flex: 1, alignSelf: 'center'}}><img src={images['level_project_code.png']} alt='The code for the Level Project'/></div>
                <div className='project-text-container'>
                    <h3>LESSONS LEARNED</h3>
                    <p>
                        This project taught me a lot about how to program microcontrollers.
                        I learned pretty quickly that memory and efficiency was a much bigger issue on this hardware than it was on most computers.
                        When I was most of the way done with the project in Python I had to switch to C++ because I was running into memory issues.
                        Switching to C++ allowed me to significantly increase the efficiency of the program and eliminate the memory issues I was having.
                        The project also required a good bit of research to learn how to go from raw accelerometer data to an angle in 3d space.
                        But after seeing how others solved this issue, the implementation for my project was just pretty simple trigonometry.
                        I learned a lot creating the level, but I think the biggest takeaway is all of the challenges that come with implementing programs on microcontrollers.
                        The hardware constraints force you to get creative when solving problems, and focus on efficiency. But those constraints only helped me learn more.
                    </p>
                </div>
            </FadeInWrapper>
        </ProjectPage>
    );
}



export default LevelProject;