import React, { Component } from 'react';
import './App.css';
import VideoSelector from './components/VideoSelector';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import MoreRecord from './MoreRecord';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
       <Route path = "/record" component={MoreRecord}/>
      </div>
      </Router>
      
    );
  }
}

export default App;
