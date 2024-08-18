import React, { useEffect } from 'react';
import '../../styles/Theme.css';
import '../../styles/ProjectPage.css';
import { LanguageDictionary } from '../Projects';
import HoverButton from '../HoverButton';
import { images } from '../Images';
import FadeInWrapper from '../FadeInWrapper';

const languageList = [LanguageDictionary.python, LanguageDictionary.keras, LanguageDictionary.tensorflow];
const githubLink = 'https://github.com/bradleybudach/ImageColorizationAI';

const ImageColorizationAI_Project = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // scroll to top on load


    return (
    <>
    <div className='project-container'>
        <FadeInWrapper className='project-header'>
            <h1>Image Colorization AI</h1>
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
            <FadeInWrapper className='image-container'>
                <img src={images['colorizer_ai_details.png']} alt='Structure of the AI model' style={{width: '80%', maxWidth: '1000px'}}/>
            </FadeInWrapper>

            <FadeInWrapper className='project-text-container'>
                <h3>OVERVIEW</h3>
                <p>
                    This project was created as the final project for a Deep Learning class at Winona State University. 
                    This project was my first attempt at creating an AI and learning at a deeper level how it works. 
                    I chose image colorization because I thought it would be a simple enough concept to start with. 
                    Since it was my first AI project, I had to overcome a lot of challenges and learn a lot of new things. 
                    The project was built in python using primarily the Keras library with a bit of Tensorflow as well. 
                    I designed the entire process from the ground up, from dataset preparation, to model architecture, to training and testing. 
                    My design is heavily based on research papers from other attempts to solve the same colorization problem. 
                    The results I achieved are far from perfect, but taught me a great deal about how to design AI models. 
                    If you want to see more details of the implementation or try out the model yourself, visit the <a href={githubLink} target='_blank'>github repo</a>.
                </p>
            </FadeInWrapper>
            
            <FadeInWrapper className='project-text-container'>
                <h3>MODEL RESULTS</h3>
                <div className='image-container' >
                    <img src={images['colorizer_ai_results.png']} alt='Results of the AI model' style={{maxWidth: '1000px'}}/>
                </div>
            </FadeInWrapper>

            <FadeInWrapper className='project-content-container'>
                <h3>CHALLENGES</h3>
                <ul>
                    <li>Using Google Colab and running into usage limits when trying to trian the AI</li>
                    <li>Running into memory limits with models that are too large</li>
                    <li>Learning tensorflow and kotlin as well as image processing architectures</li>
                    <li>Training times limit the ammount I could try something new to make improvements</li>
                    <li>Trying to create an AI model based on a novel idea and other research</li>
                    <li>Inability to work with a larger dataset due to storage and memory constraints</li>
                </ul>
            </FadeInWrapper>


            <FadeInWrapper className='side-by-side'>
                <div style={{flex: 1, alignSelf: 'center'}}>
                    <img src={images['colorizer_ai_accuracy.png']} alt='Accuracy metric for the AI model' style={{maxHeight: 600}}/>
                </div>
                <div className='project-text-container'>
                    <h3>LESSONS LEARNED</h3>
                    <p>
                    I learned a lot when working on this project. AI models can be really tricky to create, and they require a lot of iteration to improve. 
                    Through my education, I have learned the details of the internal structure of Deep Learning models such as this, and I was able to iterate and improve the model incrementally based on that knowledge. 
                    Basing the model on research from others helped me to learn what improvements and ideas are at the forefront of the industry, and helped me be creative with my own ideas. 
                    Even though my model doesn’t hold up to other models that are out there which have larger datasets, better architectures, and smarter implementations, this project still taught me a ton about Machine Learning, both theoretical and practical. 
                    With this experience, I will be more confident if I ever need to use Machine Learning on the job.
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



export default ImageColorizationAI_Project;