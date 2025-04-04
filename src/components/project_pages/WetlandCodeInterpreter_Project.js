import ProjectPage from "./ProjectPage";
import { LanguageDictionary } from "../Projects";
import FadeInWrapper from "../FadeInWrapper";
import { images } from "../Images";

const languageList = [LanguageDictionary.cSharp, LanguageDictionary.WPF, LanguageDictionary.xaml, LanguageDictionary.reactNative];
const githubLink = 'https://github.com/bradleybudach/WetlandCodeInterpreter';

const JavaCalculator_Project = () => {
    return (
        <ProjectPage title={'Wetland Code Interpreter'} languageList={languageList} githubLink={githubLink}>
            <FadeInWrapper className='side-by-side rev'>
                <div className='project-text-container'>
                    <h3>OVERVIEW</h3>
                    <p>
                        This project was commissioned by GeoSpatial Services. I was asked to create an add-in for the ArcGIS Pro software and an offline app that would 
                        allow the user to parse and understand National Wetlands Inventory Codes. The user is able to simply enter a wetland code in either the app or the add-in
                        and get detailed information about the meaning of the code, and determine its validity. This allows GIS Technicians to quickly identify or check unknown codes
                        weather they are in the office or in the field. This project brought a lot of challenges, but I was able to create something that I was proud of, 
                        and GeoSpatial Services was happy with the results, writing <a href='https://www.geospatialservices.org/news/2023/12/12/gss-student-staff-member-contributes-to-technology' target='_blank'>this post</a> about my work for them. 
                    </p>
                </div>
                
                <div style={{flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center'}}>
                        <img src={images['wetlandCodeInterpreter_GUI.png']} alt='Wetland Code Interpreter ArcGIS Pro AddIn' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                        <img src={images['wetlandCodeInterpreterApp_GUI.png']} alt='Wetland Code Interpreter App GUI screenshot showing home screen' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                </div>
            </FadeInWrapper>
            
            <FadeInWrapper className='project-content-container'>
                <h3>CHALLENGES</h3>
                <ul>
                    <li>I was only given 1 week to work on the project</li>
                    <li>Working with a python script that was written by a government employee</li>
                    <li>Rewriting the Python Script in Javascript for use in the mobile application</li>
                    <li>Testing and ensuring consistency on all platforms</li>
                    <li>Integrating a python script with the WPF Application</li>
                </ul>
            </FadeInWrapper>

            <FadeInWrapper className='side-by-side'>
                <div style={{flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center'}}>
                        <img src={images['wetlandCodeInterpreterApp_Result.png']} alt='Wetland Code Interpreter App GUI screenshot showing parsed code' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                        <img src={images['wetlandCodeInterpreterApp_Error.png']} alt='Wetland Code Interpreter App GUI screenshot showing invalid code message' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                </div>
                <div className='project-text-container'>
                    <h3>LESSONS LEARNED</h3>
                    <p>
                        Working for a company is a lot different than a personal project. The most notable change being much tighter time constraints.
                        I had to learn to focus on what was important for the requirements, and manage my time carefully so I would meet those requirements on time.
                        Coming out of the project, there are still things I would like to change. I would make UI improvements to make both versions of the application more consistent with each other.
                        I would also want to make improvements to the python script with performance in mind, as I found some ways to improve the code I was given when reading it through.
                        That brings me to the other interesting part of working on a company project, working with other people's code.
                        It took me a little bit to fully parse the code I was given by the government employee. First I focused on replicating it, but as I went through and understood more of the intricacies of the code, I was able to identify and implement improvements for my JavaScript version.
                        Overall, I am happy with the results of this project, and I think I learned a lot. I was able to manage my time well and meet all the requirements on a tight schedule, all while implementing an application in two very different formats.
                    </p>
                </div>
            </FadeInWrapper>
        </ProjectPage>
    );
}



export default JavaCalculator_Project;