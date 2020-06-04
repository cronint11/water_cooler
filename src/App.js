import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login.js';
import Feed from './components/Feed';
import CreateReview from './components/CreateReview';
import Reviews from './components/Reviews-test.js';

// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfAlt, faPlus, faComments, faHandHoldingWater } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg, faComments as faCommentsReg, faEye } from '@fortawesome/free-regular-svg-icons';

library.add( faStar, faStarReg, faStarHalfAlt, faComments, faCommentsReg, faEye, faPlus, faHandHoldingWater );

class App extends Component {

  render() {

    return (

      <Router>
        <Switch>
          <Route exact path="/create-review" component={CreateReview} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/reviews" component={Reviews} />
          <Route component={Login} />
        </Switch>
      </Router>

    );
  }
}

export default App;