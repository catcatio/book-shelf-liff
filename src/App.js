import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import EpubReader from './containers/epubreader';
import PdfReader from './containers/pdfreader';
import BookShelf from './containers/bookshelf';
import './App.css';

class App extends Component {
  render() {
    return (

      <Router basename='/shelf'>
        <div className="App">
          <div style={{width:"100%", height:"100%"}}>
            <Route exact path="/" component={BookShelf} />
            <Route exact path="/epub" component={EpubReader} />
            <Route exact path="/pdf" component={PdfReader} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
