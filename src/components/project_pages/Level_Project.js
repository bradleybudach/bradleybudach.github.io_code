import React, { useState } from 'react';
import '../../styles/Theme.css';
import '../../styles/ProjectPage.css';
import { LanguageDictionary } from '../Projects';
import HoverButton from '../HoverButton'

const languageList = [LanguageDictionary.cPlusPlus, LanguageDictionary.python, LanguageDictionary.WPF, LanguageDictionary.react, LanguageDictionary.cPlusPlus, LanguageDictionary.css];
const githubLink = 'https://github.com/bradleybudach/CircuitPlaygroundDigitalLevel';

const LevelProject = (props) => {
    return (
    <div class='project-container'>
        <div class='project-header'>
            <h1>Level Project</h1>
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
            <button className='github-button' onClick={() => {window.open(githubLink, '_blank')}}/>
        </div>
        <div className='project-body'>
            <div className='side-by-side'>
                <p style={{flex: 1}}>I bu</p>
                <div style={{flex: 1}}><img src={'/images/level_project.png'}/></div>
            </div>
            
            <div className='content-container'>
                <p>Hello There</p>
            </div>
        </div>

        <div className='project-buttons'>
            <HoverButton text={'Back To Projects'} link={'/'} target={'_self'} width={200} style={{margin: 20}}/>

            <HoverButton text={'Source Code'} link={githubLink} target={'_blank'} width={170} style={{margin: 20}}/>
        </div>
        

        <div className='footer'>
            <p>&copy; Bradley Budach 2023</p>
        </div>
    </div>
    );
}



export default LevelProject;