import React, { useRef, useState, forwardRef, useContext, useEffect } from 'react';
import AnimatedStar from './AnimatedStar';
import '../styles/Projects.css';
import '../styles/Theme.css';
import { throttle } from 'lodash';
import { useLocation, useNavigate } from 'react-router-dom';
import HoverButton from './HoverButton';
import { images } from './Images';
import { trackEvent } from './anylitics';
import { ShowMoreProjectsContext } from '../App';

// Dictionary for possible languages to display on projects
export const LanguageDictionary = {
    hmtl: {color: '#E44D26', text: 'HTML'},
    css: {color: '#214CE5', text: 'CSS'},
    javascript: {color: '#EFDA4D', text: 'JS'},
    java: {color: 'linear-gradient(#C32F06, #6E9AE4)', text: 'Java'},
    react: {color: '#0D7D9D', text: 'React'},
    reactNative: {color: '#58D7EC', text: 'React Native'},
    cSharp: {color: 'linear-gradient(-45deg, #502FDA, #8F78E0)', text: 'C#'},
    cPlusPlus: {color: 'linear-gradient(-45deg, #004681, #6499CC)', text: 'C++'},
    WPF: {color: '#015B9A', text: 'WPF'},
    python: {color: 'linear-gradient(-45deg, #254F73, #FFDC50)', text: 'Python'},
    kotlin: {color: 'linear-gradient(#E35176, #C50CE3, #8F66FE)', text: 'Kotlin'},
    xaml: {color: '#000000', text: 'XAML'},
    keras: {color: '#D00000', text: 'Keras'},
    tensorflow: {color: '#FF6F00', text: 'Tensorflow'}
};

const Category = {
    web: "web",
    gis: "gis",
    java: "java",
    c: "c",
    react: "react",
    mobile: "mobile",
    python: "python",
    ml: "ml",
    data: "data"
};


// Project Component
const Project = ({title, description, img, languageList, category, route}) => {
    const navigate = useNavigate(); // navigate to project page
    const [rotation, setRotation] = useState({}); // rotation for 3d effect
    const [isHovering, setIsHovering] = useState(false); // is this component being hovered

    // mouse move listener, throttled to 100ms for performance
    const handleMouseMove = throttle((event) => {
        if (!event.currentTarget) { // make sure component has loaded
            return;
        }

        const rect = event.currentTarget.getBoundingClientRect(); // get element

        const x = event.clientX - rect.left-(event.currentTarget.offsetWidth/2); // X position relative to center
        const y = -(event.clientY - rect.top-(event.currentTarget.offsetHeight/2)); // Y position relative to center

        setRotation({
            X: (y / event.currentTarget.offsetHeight/2).toFixed(2),
            Y: (x / event.currentTarget.offsetWidth/2).toFixed(2) 
        });
    }, 100);


    const handleMouseLeave = () => {
        // reset rotation
        setRotation({
            X: 0,
            Y: 0
          });

        setIsHovering(false);
    };

    const routeToProject = (event) => {
        navigate(route);
    };

    return (
        <div className='project' 
            onClick={routeToProject} 
            onMouseEnter={() => {setIsHovering(true)}} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave} 
            style={{transform: `rotateX(${rotation.X}deg) rotateY(${rotation.Y}deg)`}}>
                <h3 className='project-title'>{title}</h3>
                <div className='project-image-container'>
                {img}
                </div>
                <p className='description-text'>{description}</p>

                <div className='project-bottom-section'>
                    <div className='language-container'>
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
                    
                    <HoverButton text={'View Details'} width={170} style={{marginLeft: 'auto'}} buttonOverride={isHovering}/>
                </div>
        </div>
    );
}

const ProjectsArray = [
    <Project 
        title={'Wetland Code Interpreter'} 
        description={'A project for GeoSpatial Services. The Wetland Code Interpreter is both a ArcGIS Pro Add-In, and a mobile app that allows GIS Technicians to effortlessly check National Wetlands Inventory Codes.'} 
        img={<img src={images['wetlandCodeInterpreter_context_button.png']} alt='Wetland Code Interpreter Screenshot'/>}
        languageList={[LanguageDictionary.cSharp, LanguageDictionary.WPF, LanguageDictionary.xaml, LanguageDictionary.reactNative]}
        category={[Category.mobile, Category.c, Category.data]}
        route={'/WetlandCodeInterpreterProject'}/>,
    <Project 
        title={'Digital Level'} 
        description={'Integrating both hardware and software using a Circuit Playground, this level uses an accelerometer and LEDs to efficiently measure and indicate the flatness of a surface.'} 
        img={<img src={images['level_project.png']} alt='Circuit Playground Level'/>}
        languageList={[LanguageDictionary.cPlusPlus, LanguageDictionary.python]}
        category={[Category.c, Category.python, Category.data]}
        route={'/LevelProject'}/>,
    <Project 
        title={'Voice Photos App'} 
        description={'A mobile app commissioned by GeoSpatial Services used for field image capture and voice recordings. This app allows GSS Technicians to easily capture data offline and in the field.'} 
        img={<img src={images['voicePhotos_Photo.png']} alt='Voice Photos Application' style={{objectFit: 'contain'}}/>}
        languageList={[LanguageDictionary.reactNative, LanguageDictionary.javascript, LanguageDictionary.kotlin]}
        category={[Category.mobile, Category.gis, Category.react]}
        route={'/VoicePhotosProject'}/>,
    <Project
        title={'Image Colorization AI'}
        description={'A machine learning project that attempts to colorize grayscale images. This project uses deep learning frameworks to predict missing color values from images.'}
        img={<img src={images['colorizer_ai_overview.png']} alt={'Image Colorization Example'}/>}
        languageList={[LanguageDictionary.python, LanguageDictionary.keras, LanguageDictionary.tensorflow]}
        category={[Category.python, Category.ml, Category.data]}
        route={'/ImageColorizationAIProject'}
        />,
    <Project 
        title={'GIS Project Tracking Tool'} 
        description={'A project management tool written in python to interface with ArcGIS PRO and ArcGIS Online. This tool creates progress tracking dashboards and updates with progress throughout a project.'} 
        img={<img src={images['project_tracking_map.png']} alt='Project Tracking Dashboard Map'/>}
        languageList={[LanguageDictionary.python]}
        category={[Category.gis, Category.python, Category.data]}
        route={'/ProjectTrackingProject'}/>,
    <Project 
        title={'Java Calculator'} 
        description={'A calculator built using purely Java. It has the capability to solve expressions respecting order of operations, including custom functions.'} 
        img={<img src={images['calculator_gui.png']} alt='Calculator Application' style={{objectFit: 'contain'}}/>}
        languageList={[LanguageDictionary.java]}
        category={[Category.java, Category.data]}
        route={'/JavaCalculatorProject'}/>,
    <Project 
        title={'Fruit Game'} 
        description={''} 
        img={<img src={images['fruit_game_watermelon.png']} alt='Calculator Application' style={{objectFit: 'contain'}}/>}
        languageList={[LanguageDictionary.hmtl, LanguageDictionary.css, LanguageDictionary.javascript]}
        category={[Category.web]}
        route={'/FruitGameProject'}/>
];

// forwards ref of title back to navigation to allow for scrolling to this section
const ProjectsSection = forwardRef((props, ref) => {
    // use location to change priority projects:
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    // Order projects by URL category target:
    const orderProjects = (projectsArr) => {
        if (!queryParams.has("c")) { // no category in URL
            return projectsArr;
        }
        
        const targetCategories = queryParams.getAll("c");
        window.history.pushState('homepage', 'Home Page', '/'); // push the state into history to clear URL bar

        // sort project array to by the category URL param to show target categories on top:
        return projectsArr.sort((a, b) => {
            // Give each project a score of how many categories it fits (projects that fit the most target categories appear on top):
            let aScore = 0, bScore = 0;
            a.props.category.map(category => {
                if (targetCategories.includes(category)) {
                    aScore++;
                }
            });

            b.props.category.map(category => {
                if (targetCategories.includes(category)) {
                    bScore++;
                }
            });

            return bScore-aScore;
        });
    }

    // show more projects context:
    const [showProjectsContext, setShowMoreProjects] = useContext(ShowMoreProjectsContext);

    const starTarget = useRef(null); // Ref used for AnimatedStar
    const [isComponentVisible, setIsComponentVisible] = useState(false); // visibility used for appearance animations
    const [projectsDisplayedCount, setProjectsDisplayedCount] = useState(showProjectsContext ?? 4); // how many projects to display on the page, uses saved context or the default

    // callback function from AnimatedStar
    const starAnimEvent = (visibility) => { 
        setIsComponentVisible(visibility);
    };

    // show more projects button:
    const showMoreProjects = () => {
        const newProjectCount = Math.min(projectsDisplayedCount + 4, ProjectsArray.length);
        setProjectsDisplayedCount(newProjectCount);
        setShowMoreProjects(newProjectCount); // sets context to save shown projects when coming back to this page
        setTimeout(() => {  window.dispatchEvent(new Event('resize')); }, 100); // wait slighly to give page time to update before resize event
    };

    return (
        <div className='section-container' ref={ref}>
            <AnimatedStar targetRef={starTarget} startOffset={{X: 200, Y: 50}} animationStartOffset={50} scrollLength={300} callbackRef={starAnimEvent}/>
            <div className='title-container' ref={starTarget}>
                <div className='title-border' style={{
                    visibility: (isComponentVisible) ? 'visible' : 'hidden',
                    width: (isComponentVisible) ? 200 : 0,
                    transitionDelay: (isComponentVisible) ? '0.5s' : '0s',
                }}>
                    <h2 className='section-title'>PROJECTS</h2>
                </div>
            </div>

            <div className='projects-container' style={{opacity: (isComponentVisible) ? 1 : 0, transitionDelay: (isComponentVisible) ? '0.5s' : '0s'}}>
                {orderProjects(ProjectsArray).slice(0, projectsDisplayedCount)}
            </div>
            <HoverButton text={'More Projects'} width={170} style={{opacity: (isComponentVisible && projectsDisplayedCount < ProjectsArray.length) ? 1 : 0, transitionDelay: (isComponentVisible) ? '0.5s' : '0s'}} onClick={showMoreProjects}/>
        </div>
    );
});


export default ProjectsSection;