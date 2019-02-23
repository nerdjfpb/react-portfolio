import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';


class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://image.flaticon.com/icons/png/512/147/147140.png"
                            alt="avatar"
                            className="avatar"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML/CSS |  Bootstrap | Javascript | React | React Native |  Node Js | Express | Mongo DB</p>

                            <div className="social-links">
                                <a href="https://google.com" target="_blank">
                                    <i className="fa fa-linkedin-square"></i>
                                </a>
                                <a href="https://github.com" target="_blank">
                                    <i className="fa fa-github-square"></i>
                                </a>
                                <a href="https://github.com" target="_blank">
                                    <i className="fa fa-twitter-square"></i>
                                </a>
                                <a href="https://github.com" target="_blank">
                                    <i className="fa fa-youtube-square"></i>
                                </a>
                            </div>

                        </div>
                       
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;