import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                                src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX2580817.jpg"
                                alt="man in suit"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Mitchell Glazier</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid blue', width: '50%'}}/> 
                        <p>alsdjf lskdf j;laskd fj alsdk jf;l laskdj f;l laksdj f; laskdj fj
                            askdj fl laskdj flkajsd f laskdjf la sdlfk ja; alsdkjf ;lskd flaskdf 
                            aslkdjf alsdkfj  laskdj f</p>
                        <hr style={{borderTop: '3px solid blue', width: '50%'}}/> 
                        <h5>Address</h5>
                        <p>632 West Mulberry Street, Stansbury Park UT</p>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>Right Side</Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;