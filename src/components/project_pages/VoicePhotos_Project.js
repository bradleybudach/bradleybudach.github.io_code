import ProjectPage from "./ProjectPage";
import { LanguageDictionary } from "../Projects";
import FadeInWrapper from "../FadeInWrapper";
import { images } from "../Images";

const languageList = [LanguageDictionary.reactNative, LanguageDictionary.javascript, LanguageDictionary.kotlin];
const githubLink = 'https://github.com/bradleybudach/Voice_Photos';

const JavaCalculator_Project = () => {
    return (
        <ProjectPage title={'Voice Photos App'} languageList={languageList} githubLink={githubLink}>
            <FadeInWrapper className='side-by-side'>
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
            </FadeInWrapper>
            
            <FadeInWrapper className='project-content-container'>
                <h3>CHALLENGES</h3>
                <ul>
                    <li>Working within tight time constraints of about two weeks</li>
                    <li>Taking feedback and applying it to the app</li>
                    <li>Resolving issues with image EXIF data causing strange results</li>
                    <li>Integrating Kotlin code with React Native</li>
                    <li>Working with the security requirements of file storage and permissions on android devices</li>
                </ul>
            </FadeInWrapper>

            <FadeInWrapper className='side-by-side'>
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
            </FadeInWrapper>
        </ProjectPage>
    );
}



export default JavaCalculator_Project;