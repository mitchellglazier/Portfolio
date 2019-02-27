import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img
                        src="https://cdn3.iconfinder.com/data/icons/web-and-seo-11-1/65/549-512.png"
                        alt="Mitchell LinkedIn Picture"
                        className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Web Developer</h1>

                    <hr/>

                    <p>React | Angular | Rails | JavaScript | TypeScript | Ruby | HTML/CSS</p>

                    <div className="social-links">

                        {/* LinkedIn */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* GitHub */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        {/* Medium */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-medium" aria-hidden="true" />
                        </a>

                        {/* Facebook */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-facebook" aria-hidden="true" />
                        </a>

                    </div>
                    </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;