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
                        alt="Mitchell Glazier"
                        className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1>Web Developer</h1>

                    <hr/>

                    <p>React | Angular | Rails | JavaScript | TypeScript | Ruby | HTML/CSS</p>

                    <div className="social-links">

                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/mitchellglazier/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>

                        {/* GitHub */}
                        <a href="https://github.com/mitchellglazier" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                        {/* Medium */}
                        <a href="https://medium.com/@mitchellglazier/has-recommended" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-medium" aria-hidden="true" />
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/mitchell.glazier" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-facebook" aria-hidden="true" />
                        </a>

                        {/* CodeWars */}
                        <a href="https://www.codewars.com/users/mitchellglazier" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-code" aria-hidden="true" />
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