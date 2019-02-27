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
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
    </Switch>
)

export default Main;