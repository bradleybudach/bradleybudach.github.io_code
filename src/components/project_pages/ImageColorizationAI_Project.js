import ProjectPage from "./ProjectPage";
import { LanguageDictionary } from "../Projects";
import FadeInWrapper from "../FadeInWrapper";
import { images } from "../Images";

const languageList = [LanguageDictionary.python, LanguageDictionary.keras, LanguageDictionary.tensorflow];
const githubLink = 'https://github.com/bradleybudach/ImageColorizationAI';

const ImageColorizationAI_Project = () => {
    return (
        <ProjectPage title={'Image Colorization AI'} languageList={languageList} githubLink={githubLink}>
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
                <div className='image-container'>
                    <img src={images['colorizer_ai_results.png']} alt='Results of the AI model' style={{maxWidth: 'min(100%, 1000px)'}}/>
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
        </ProjectPage>
    );
}



export default ImageColorizationAI_Project;