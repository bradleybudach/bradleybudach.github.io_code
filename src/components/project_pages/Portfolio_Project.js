import ProjectPage from "./ProjectPage";
import { LanguageDictionary } from "../Projects";
import FadeInWrapper from "../FadeInWrapper";
import { images } from "../Images";

const languageList = [LanguageDictionary.react, LanguageDictionary.hmtl, LanguageDictionary.css, LanguageDictionary.javascript];
const githubLink = 'https://github.com/bradleybudach/bradleybudach.github.io_code';

const Portfolio_Project = () => {
    return (
        <ProjectPage title={'My Portfolio Website'} languageList={languageList} githubLink={githubLink}>
            <FadeInWrapper className='project-text-container'>
                <h3>OVERVIEW</h3>
                <p>
                    This website was made to present my projects and skills to potential employers. Besides just being a home to present other projects. 
                    The site itself is designed to showcase my front-end design work. The site is designed with mobile in mind, and uses React to have a clean and performant interface.
                    I wanted the site to both look clean and professional while also showing some of my creativity. Little things like the animations on buttons and the way elements fade in is all designed to 
                    showcase my creativity without getting in the way of what the site is trying to present. 
                </p>
            </FadeInWrapper>

            <FadeInWrapper className='image-container'>
                <img src={images['portfolio_code.png']} alt='Code behind the portfolio site'/>
            </FadeInWrapper>
            
            <FadeInWrapper className='project-content-container'>
                <h3>HIGHLIGHTS</h3>
                <p>I put a lot of creativity and work into this site that I am proud of. Here are some of my personal favorite things about the site:</p>
                <ul>
                    <li>Set up a simple way to create new projects that makes it easy when I want to add additional work to the site.</li>
                    <li>Custom fade in and section animations on the home screen that integrate with the theme of stars in the background.</li>
                    <li>The stars in the background of the home page are randomly generated and adapt to changing the page size.</li>
                    <li>I developed a system to categorize projects internally. Custom links can be used to display the most relevant projects first for whatever type of job I apply for.</li>
                    <li>CSS is written for projects to allow for lots of options while still ensuring seamless transitions between mobile and desktop.</li>
                    <li>The site integrates Google Analytics to track if employers visit the site and what projects they are interacting with.</li>
                </ul>
            </FadeInWrapper>
        </ProjectPage>
    );
}



export default Portfolio_Project;