import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

// importing styles
import './index.css'
import Header from './components/Header';
import Mission from './components/mission';
import Quote from './components/quote';
import QuickFacts from './components/quick_facts';
import JSON from './data.json'
import Announcements from './components/announcements';
import Footer from './components/footer';
// import Content from './components/Content';
// import ClassTest from './components/classtest';
// import StateDemo from './components/StateDemo';

class App extends Component {

  state = {
    infos: JSON
  }
  render() {
    return (
      <div>
        <Header />
        <Mission/>
        <Quote/>
        <QuickFacts infos={this.state.infos}/>
        <Announcements/>
        <Footer/>
      </div>
    )
  }
}

// create a root object for the index.html's div root
const root = ReactDOM.createRoot(document.getElementById("root"));

// render the app component on the root object
root.render(<App/>)
