import React, { useEffect } from 'react';
import '../../styles/Theme.css';
import '../../styles/ProjectPage.css';
import { LanguageDictionary } from '../Projects';
import HoverButton from '../HoverButton';
import { images } from '../Images';

const languageList = [LanguageDictionary.cSharp, LanguageDictionary.WPF, LanguageDictionary.xaml, LanguageDictionary.reactNative];
const githubLink = 'https://github.com/bradleybudach/WetlandCodeInterpreter';

const JavaCalculator_Project = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // scroll to top on load


    return (
    <>
    <div className='project-container'>
        <div className='project-header'>
            <h1>Wetland Code Interpreter</h1>
            <div className='language-cont'>
                {
                    languageList.map(language => {
                        return (
                            <div key={language.text} className='language-display'>
                                <div className='language-color' style={{backgroundColor: language.color}}/>
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
            
        </div>
        <div className='project-body'>
            <div className='side-by-side rev'>
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
            </div>
            
            <div className='project-content-container'>
                <h3>CHALLENGES</h3>
                <ul>
                    <li>I was only given 1 week to work on the project</li>
                    <li>Working with a python script that was written by a government employee</li>
                    <li>Rewriting the Python Script in Javascript for use in the mobile application</li>
                    <li>Testing and ensuring consistency on all platforms</li>
                    <li>Integrating a python script with the WPF Application</li>
                </ul>
            </div>

            <div className='side-by-side'>
                <div style={{flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center'}}>
                        <img src={images['wetlandCodeInterpreterApp_Result.png']} alt='Wetland Code Interpreter App GUI screenshot showing parsed code' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                        <img src={images['wetlandCodeInterpreterApp_Error.png']} alt='Wetland Code Interpreter App GUI screenshot showing invalid code message' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                </div>
                <div className='project-text-container'>
                    <h3>LESSONS LEARNED</h3>
                    <p>
                        Working for a company is a lot different than a personal project. The most notable change being much tigher time constraints.
                        I had to learn to focus on what was important for the requirements, and manage my time carefully so I would meet those requirements on time.
                        Coming out of the project, there are still things I would like to change. I would make UI improvements to make both versions of the application more consistent with eachother.
                        I would also want to make improvements to the python script with performance in mind, as I found some ways to improve the code I was given when reading it through.
                        That brings me to the other interesting part of working on a company project, working with other peoples code. 
                        It took me a little bit to fully parse the code I was given by the government employee. First I focused on replicating it, but as I went through and understood more of the intracicies of the code, I was able to identify and implement improvements for my JavaScript version.
                        Overall, I am happy with the results of this project, and I think I learned a lot. I was able to manage my time well and meet all the requirements on a tight schedule, all while implementing an application in two very different formats.
                    </p>
                </div>
            </div>
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