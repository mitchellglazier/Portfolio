import React, { Component } from 'react';
import { Layout, Header, Navigation, Content} from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className='header-color boxhead' title={<span><span style={{ color: '#ddd' }}></span><strong><Link to="/">Mitchell's Portfolio</Link></strong></span>}>
            <Navigation>
                {/* <Link to="/about">About Me</Link> */}
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        {/* <Drawer title="My Portfolio">
            <Navigation>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer> */}
          <div className="page-content" />
          <Main/>
        <Content />
    </Layout>
</div>
    );
  }
}

export default App;
