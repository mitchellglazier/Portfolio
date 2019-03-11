import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent, } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Mitchell Glazier</h2>
                        <img
                            src="https://media.licdn.com/dms/image/C4D03AQHyIiyW__KH0w/profile-displayphoto-shrink_200_200/0?e=1553126400&v=beta&t=4roJQmYcG0t4ltVaxf6idNU0uMJPpfU46-MCXNo28w0" 
                            alt="Mitchell Glazier LinkedIn"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em', }} >All about mitchell glazier alsdk jfa ;ls dkfas;fk jaslkf djaslkd fjals dfjlaskdfj.
                            lfaksj dflkaj sldfja sldfjkal skd jfl askdj flasdjf lasdjflajsdlf.
                            aslkdfj alskdj flka sdjf.s kdjf  alsk jdf </p>
                    </Cell>

                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                            (435)899-9292
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-commenting" aria-hidden="true"/>
                            (435)899-9292
                            </ListItemContent>                        
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            glazierm@gmail.com
                            </ListItemContent>                        
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            grandchamp_k2@hotmail.com
                            </ListItemContent>                        
                        </ListItem>
                        </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;