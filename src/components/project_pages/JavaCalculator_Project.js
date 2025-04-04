import ProjectPage from "./ProjectPage";
import { LanguageDictionary } from "../Projects";
import FadeInWrapper from "../FadeInWrapper";
import { images } from "../Images";

const languageList = [LanguageDictionary.java];
const githubLink = 'https://github.com/bradleybudach/JavaCalculator';

const JavaCalculator_Project = () => {
    return (
        <ProjectPage title={'Java Calculator'} languageList={languageList} githubLink={githubLink}>
            <FadeInWrapper className='side-by-side rev'>
                <div style={{flex: 1, alignSelf: 'center'}}>
                    <img src={images['calculator_gui.png']} alt='Calculator Application GUI' style={{maxHeight: 600}}/>
                </div>

                <div className='project-text-container'>
                    <h3>OVERVIEW</h3>
                    <p>
                        I built this Calculator GUI Application using Java for a class. This project gave me some good experience with designing GUI Applications as well as algorithms.
                        I wanted my calculator to be more interesting than just solving one operation on two numbers. Instead I decided to design it so it could determine order of operations and solve full expressions.
                        I also designed it with a focus on extensibility, creating an easy way to extend the functionality of the calculator by defining new functions.
                        By challenging myself in this manner I learned a lot of new things.
                    </p>
                </div>
            </FadeInWrapper>
            
            <FadeInWrapper className='project-content-container'>
                <h3>THE ALGORITHM</h3>
                <div className='side-by-side'>
                    <div className='project-text-container'>
                        <p>
                            The Most challenging part of this project was figuring out an algorithm to get it to properly handle order of operations.
                            After some research, I found the Shunting Yard Algorithm, which I ended up implementing and modifying for my calculator.
                            It works by reading the expression line by line and storing values in an operator and operand stack.
                            This is very similar to how the CPU handles operations on a low level. I took this basic algorithm and modified it to allow for custom functions to be
                            included and calculated in the expression.
                        </p>
                    </div>

                    <div style={{flex: 1, display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                        <img src={images['calculator_solution.png']} alt='Solution to a problem in calculator GUI' style={{margin: 10}}/>
                        <img src={images['calculator_solution2.png']} alt='Solution to a problem in calculator GUI' style={{margin: 10}}/>
                    </div>
                </div>
            </FadeInWrapper>

            <FadeInWrapper className='side-by-side'>
                <div style={{flex: 1, alignSelf: 'center'}}><img src={images['calculator_code.png']} alt='Calculator Project Code'/></div>
                <div className='project-text-container'>
                    <h3>LESSONS LEARNED</h3>
                    <p>
                        This project was a great learning experience. Both creating the calculator algorithm and designing the GUI were challenging in their own right. 
                        I did not expect to learn about much lower level algorithms when trying to design the calculator, but doing so has helped me better understand how computers work the way they do.
                        I think it is a good idea to challenge myself whenever I take on projects like this. Go above and beyond the requirements.
                        I could have just done a basic calculator that does the standard operations, but because I chose to take on a harder challenge, I learned way more than I would have otherwise.
                    </p>
                </div>
            </FadeInWrapper>
        </ProjectPage>
    );
}



export default JavaCalculator_Project;