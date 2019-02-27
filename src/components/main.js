import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import About from './aboutme';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact'

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/Contact" component={Contact} />
    </Switch>
)

export default Main;