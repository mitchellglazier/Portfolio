import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import './App.css';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
            </Navigation>
        </Drawer>
          <div className="page-content" />
          <Main/>
        <Content />
    </Layout>
</div>
    );
  }
}

export default App;
