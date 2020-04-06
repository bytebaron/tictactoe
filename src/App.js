import React, {Component} from 'react';
import './App.css';
import Board from './Board';
import Container from 'react-bootstrap/Container';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Board}/> 
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
