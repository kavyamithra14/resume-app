import React, { Component } from 'react';

import PersonalData from './personaldata.js';
import RightData from './rightdiv.js';
import './App.css';


class App extends Component {
  render() {
    return (
        <div className="resume">
          <PersonalData/>
           <RightData/>

        </div>
    );
  }
}

export default App;
