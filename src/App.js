import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './components/Feed';
import FeedFB from './components/FeedFB';
import CreateReview from './components/CreateReview';
import Mediatype from './components/Mediatype.js';
import Watchlist from './components/Watchlist.js';
import SearchFriend from './components/Searchforfriend.js';
import Footer from './components/Footer.js';
import Footerv2 from './components/Footer-v2.js'


// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfAlt, faPlus, faComments, faHandHoldingWater } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg, faComments as faCommentsReg, faEye } from '@fortawesome/free-regular-svg-icons';

library.add( faStar, faStarReg, faStarHalfAlt, faComments, faCommentsReg, faEye, faPlus, faHandHoldingWater );

class App extends Component {

  render() {

    return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/feedfb" component={FeedFB} />
          <Route exact path="/create-review" component={CreateReview} />
          <Route exact path="/media" component={Mediatype} />
          <Route exact path="/watchlist" component={Watchlist} />
          {/* <Route exact path="/reviews" component={Reviews} /> */}
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/searchfriend" component={SearchFriend} />
          <Route component={Login} />
        </Switch>
        <Footerv2 />
      </Router> 
      
     
    </div>   
    
    );
  }
}

export default App;