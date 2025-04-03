import React, { useEffect } from 'react';
import '../../styles/Theme.css';
import '../../styles/ProjectPage.css';
import { LanguageDictionary } from '../Projects';
import HoverButton from '../HoverButton';
import { images } from '../Images';
import FadeInWrapper from '../FadeInWrapper';
import { Footer } from '../HomePage';

const languageList = [LanguageDictionary.python];
const githubLink = 'https://github.com/bradleybudach/WetlandProjectTrackingTool';

const ProjectTracking_Project = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // scroll to top on load


    return (
    <>
    <div className='project-container'>
        <FadeInWrapper className='project-header'>
            <h1>GIS Project Tracking Tool</h1>
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
            <div style={{flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center'}}>
                        <img src={images['project_tracking_setup.png']} alt='Setup inputs for the project tracking tool' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                        <img src={images['project_tracking_update.png']} alt='Update inputs for the project tracking tool' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                </div>

                <div className='project-text-container'>
                    <h3>OVERVIEW</h3>
                    <p>
                        This project was created for GeoSpatial Services who wanted a consistent and simple way to track project progress across various teams and projects.
                        Me and a fellow employee came up with the solution to create a ArcGIS Online dashboard to show team progress statistics in an overview for team leads, 
                        while also providing a tool integrated into ArcGIS Pro to handle gathering team progress data and updating online dashboard. This tool was designed to be as simple as possible for team leads to use.
                        A single step is done at the start of the project to create the dashboard. After that a simple tool is used to assign checkouts to team members. And another tool scheduled to run once a week to update the dashboard with team progress.
                        After completing this project, Geospatial services now uses this tool to track team progress across multiple recently started projects. 
                    </p>
                </div>
            </FadeInWrapper>
            
            <FadeInWrapper className='project-content-container'>
                <h3>HIGHLIGHTS</h3>
                <p>While the tool keeps things simple on the front end. There is a lot going on behind the scenes to get things working seamlessly across the server. Here are some highlights of how the tool functions:</p>
                <ul>
                    <li>The setup tool works by copying a pre-existing dashboard template from ArcGIS online into the Project Manager's profile. It also sets up all folders and databases needed to track the project.</li>
                    <li>I wanted to have the tool create as little disruption in the normal workflow as possible. When team members working on the project are assigned checkouts, the only thing they need to do is enter the time when they completed their mapping and the tool handles the rest.</li>
                    <li>The update portion of the tool that updates the dashboard with current progress checks the current stage of the process that each team member is on and only updates it when they have made progress. This improves the speed of the update process by only changing new data.</li>
                    <li>The tool is meant for tracking more than just mapping. It also tracks QA and Revision times from multiple members working on the same area.</li>
                    <li>The dashboard is designed to be customizable for the needs of each project. There are sections created for setting project goals so project leads can ensure their team is on track at a glance.</li>
                </ul>
            </FadeInWrapper>

            <FadeInWrapper className='project-text-container'>
                <h3>CUSTOMIZABLE DASHBOARD DESIGN</h3>
                <div className='image-container'>
                    <img src={images['project_tracking_pie.png']} alt='Pie Chart and map on dashboard'/>
                </div>
                <div className='image-container'>
                    <img src={images['project_tracking_stats1.png']} alt='Project tracking statistics on dashboard'/>
                </div>
                <div className='image-container'>
                    <img src={images['project_tracking_team.png']} alt='Project tracking team progress statistics on dashboard'/>
                </div>
                <div className='image-container'>
                    <img src={images['project_tracking_editors.png']} alt='Project tracking individual editor statistics'/>
                </div>
                
            </FadeInWrapper>

            <FadeInWrapper className='side-by-side'>
                <div className='project-text-container'>
                    <h3>CONCLUSION</h3>
                    <p>
                        Working on this project was both challenging and a lot of fun. Working towards the use cases outlined by the company while also finding a balance between simplicity and functionality was a fun challenge.
                        This project also helped me improve my teamwork skills. Me and my partner worked well together, bouncing ideas off each other as we worked to meet the requirements. Overall, I am really proud of working on this project and I 
                        am glad that Geospatial Services is making good use of it for tracking their projects.
                    </p>
                </div>
            </FadeInWrapper>
        </div>

        <div className='project-buttons'>
            <HoverButton text={'Back To Projects'} link={'/'} navigate={true} width={200} style={{margin: 20}} colors={{main: 'rgba(255, 83, 73, 0.5)'}}/>

            <HoverButton text={'Source Code'} link={githubLink} target={'_blank'} width={170} style={{margin: 20}}/>
        </div>
        
    </div>

    <Footer/>
    </>
    );
}



export default ProjectTracking_Project;