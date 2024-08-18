import React, { useEffect } from 'react';
import '../../styles/Theme.css';
import '../../styles/ProjectPage.css';
import { LanguageDictionary } from '../Projects';
import HoverButton from '../HoverButton';
import { images } from '../Images';
import FadeInWrapper from '../FadeInWrapper';

const languageList = [LanguageDictionary.java];
const githubLink = 'https://github.com/bradleybudach/JavaCalculator';

const JavaCalculator_Project = (props) => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // scroll to top on load


    return (
    <>
    <div className='project-container'>
        <FadeInWrapper className='project-header'>
            <h1>Java Calculator</h1>
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
            <FadeInWrapper className='side-by-side rev'>
                <div style={{flex: 1, alignSelf: 'center'}}>
                    <img src={images['calculator_gui.png']} alt='Calculator Application GUI' style={{maxHeight: 600}}/>
                </div>

                <div className='project-text-container'>
                    <h3>OVERVIEW</h3>
                    <p>
                        I built this Calculator GUI Application using Java for a class. This project gave me some good experience with designing GUI Applications as well as algorithms.
                        I wanted my calculator to be more interesting than just solving one operation on two numbers. Instead I decided to design it so it could determine order of operations and solve full expressions.
                        I also designed it with a focus on extensibility, creating an easy way to extend the functionality of the calculator by defining new functions.
                        By challenging myself in this manner I learned a lot of new things.
                    </p>
                </div>
            </FadeInWrapper>
            
            <FadeInWrapper className='project-content-container'>
                <h3>THE ALGORITHM</h3>
                <div className='side-by-side'>
                    <div className='project-text-container'>
                        <p>
                            The Most challenging part of this project was figuring out an algorithm to get it to properly handle order of operations.
                            After some research, I found the Shunting Yard Algorithm, which I ended up implementing and modifying for my calculator.
                            It works by reading the expression line by line and storing values in an operator and operand stack.
                            This is very similar to how the CPU handles operations on a low level. I took this basic algorithm and modified it to allow for custom functions to be
                            included and calculated in the expression.
                        </p>
                    </div>

                    <div style={{flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        <img src={images['calculator_solution.png']} alt='Solution to a problem in calculator GUI' style={{margin: 10}}/>
                        <img src={images['calculator_solution2.png']} alt='Solution to a problem in calculator GUI' style={{margin: 10}}/>
                    </div>
                </div>
            </FadeInWrapper>

            <FadeInWrapper className='side-by-side'>
                <div style={{flex: 1, alignSelf: 'center'}}><img src={images['calculator_code.png']} alt='Calculator Project Code'/></div>
                <div className='project-text-container'>
                    <h3>LESSONS LEARNED</h3>
                    <p>
                        This project was a great learning experience. Both creating the calculator algorithm and designing the GUI were challenging in their own right. 
                        I did not expect to learn about much lower level algorithms when trying to design the calculator, but doing so has helped me better understand how computers work the way they do.
                        I think it is a good idea to challenge myself whenever I take on projects like this. Go above and beyond the requirements.
                        I could have just done a basic calculator that does the standard operations, but because I chose to take on a harder challenge, I learned way more than I would have otherwise.
                    </p>
                </div>
            </FadeInWrapper>
        </div>

        <div className='project-buttons'>
            <HoverButton text={'Back To Projects'} link={'/'} navigate={true} width={200} style={{margin: 20}} colors={{main: 'rgba(255, 83, 73, 0.5)'}}/>

            <HoverButton text={'Source Code'} link={githubLink} target={'_blank'} width={170} style={{margin: 20}}/>
        </div>
        
    </div>

    <div className='footer'>
        <p style={{margin: 5, padding: 0}}>&copy; Bradley Budach 2023</p>
    </div>
    </>
    );
}



export default JavaCalculator_Project;