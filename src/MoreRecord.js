import React, { Component } from 'react';
//import './App.css';
import VideoSelector from './components/VideoSelector';



class MoreRecord extends Component {
  render() {
    return (
      <div className="App">
        <VideoSelector />
        <h3> Select Camera under dropdown :)</h3>
       

      </div>
    );
  }
}

export default MoreRecord;