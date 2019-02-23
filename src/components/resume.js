import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                                alt="avatar"
                                style={{height:'200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Person Name</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Dhaka Bangladesh</p>
                        <h5>Phone</h5>
                        <p>(123) 456-7890</p>
                        <h5>Email</h5>
                        <p>someone@example.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        
                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                    <h2>Education</h2>
                    <Education
                    startYear={2002}
                    endYear={2006}
                    schoolName="My University"
                    schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <Education
                        startYear={2007}
                        endYear={2009}
                        schoolName="My 2nd University"
                        schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Experience</h2>
                    <Experience
                    startYear={2009}
                    endYear={2012}
                    jobName="First Job"
                    jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    />
                    <Experience
                        startYear={2012}
                        endYear={2016}
                        jobName="Second Job"
                        jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                        />
                    <hr style={{borderTop: '3px solid #e22947'}} />
                    <h2>Skills</h2>
                    <Skills
                        skill="javascript"
                        progress={100}
                        />
                        <Skills
                        skill="HTML/CSS"
                        progress={80}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={50}
                            />
                            <Skills
                            skill="React"
                            progress={25}
                            />

                    </Cell>
                </Grid>
                

            </div>
        )
    }
}

export default Resume;