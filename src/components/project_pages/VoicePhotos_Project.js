import React, { useEffect } from 'react';
import '../../styles/Theme.css';
import '../../styles/ProjectPage.css';
import { LanguageDictionary } from '../Projects';
import HoverButton from '../HoverButton';
import { images } from '../Images';

const languageList = [LanguageDictionary.reactNative, LanguageDictionary.javascript, LanguageDictionary.kotlin];
const githubLink = 'https://github.com/bradleybudach/Voice_Photos';

const JavaCalculator_Project = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // scroll to top on load


    return (
    <>
    <div className='project-container'>
        <div className='project-header'>
            <h1>Voice Photos App</h1>
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
            <div className='side-by-side'>
                <div style={{flex: 1, alignSelf: 'center'}}><img src={images['voicePhotos_Title.png']} alt='Loading Screen of Voice Photos App' style={{maxHeight: 600}}/></div>

                <div className='project-text-container'>
                    <h3>OVERVIEW</h3>
                    <p>
                        This was my first project that I was asked to create by GeoSpatial Services. They came to me with a proposition: would it be possible to create an app that 
                        would improve their note taking in the field by allowing them to take offline photos associated with recorded descriptions. I told them that I was up to the challenge.
                        Previously, GeoSpatial Services would handwrite location data and notes about specific geographic features when out in the field. My goal was to digitize and improve on this process.
                        The Voice Photos app allows Technicians the ability to easily take pictures and associate them with recorded notes. These pictures are geotagged which allows them to easily be brought
                        into the ArcGIS Pro software where they are used. 
                    </p>
                </div>
            </div>
            
            <div className='project-content-container'>
                <h3>CHALLENGES</h3>
                <ul>
                    <li>Working within tight time constraints of about two weeks</li>
                    <li>Taking feedback and applying it to the app</li>
                    <li>Resolving issues with image EXIF data causing strange results</li>
                    <li>Integrating Kotlin code with React Native</li>
                    <li>Working with the security requirements of file storage and permissions on android devices</li>
                </ul>
            </div>

            <div className='side-by-side'>
                <div style={{flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'row', alignSelf: 'center'}}>
                        <img src={images['voicePhotos_Recording.png']} alt='Voice Photos App Playing Recorded Audio' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                        <img src={images['voicePhotos_Files.png']} alt='Voice Photos App File Screen' style={{margin: 10, maxHeight: 600, maxWidth: '50%'}}/>
                </div>

                <div className='project-text-container'>
                    <h3>LESSONS LEARNED</h3>
                    <p>
                        I was given fairly tight time constraints to create this application which caused some pressure. Especially considering some of the issues I faced.
                        I was having an issue where using the premade library to insert location data into each picture was also causing an unintended 90 degree rotation of that image.
                        To fix this, I had to write my own native code to insert the location data and integrate it with React Native, which is something I had never done before.
                        Despite this complication, I managed to complete the app on time, and I even had time to act on feedback I was given throughout the project,
                        like making the action of taking a photo more clear by adding haptics.
                        The app was used in the field in Alaska shortly after completion, and GeoSpatial Services was happy with the results.
                        They wrote <a href='https://www.geospatialservices.org/news/2023/12/12/gss-student-staff-member-contributes-to-technology' target='_blank'>this post</a> about the projects I have done for them while at the company.
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