import ProjectPage from "./ProjectPage";
import { LanguageDictionary } from "../Projects";
import FadeInWrapper from "../FadeInWrapper";
import { images } from "../Images";

const languageList = [LanguageDictionary.python];
const githubLink = 'https://github.com/bradleybudach/WetlandProjectTrackingTool';

const ProjectTracking_Project = () => {
    return (
        <ProjectPage title={'GIS Project Tracking Tool'} languageList={languageList} githubLink={githubLink}>
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
        </ProjectPage>
    );
}



export default ProjectTracking_Project;