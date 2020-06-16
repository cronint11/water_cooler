import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Feed from './components/Feed';
import CreateReview from './components/CreateReview';
import Mediatype from './components/Mediatype';
import Watchlist from './components/Watchlist';
import SearchFriend from './components/Searchforfriend';
import Subscriptions from './components/Subscriptions';
import Footer from './components/Footer';


// Font Awesome Setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faStarHalfAlt, faPlus, faComments, faHandHoldingWater } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarReg, faComments as faCommentsReg, faEye } from '@fortawesome/free-regular-svg-icons';
import { faYoutube, faAmazon } from '@fortawesome/free-brands-svg-icons';

library.add( faStar, faStarReg, faStarHalfAlt, faComments, faCommentsReg, faEye, faPlus, faHandHoldingWater, faYoutube, faAmazon );

class App extends Component {

  render() {

    return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/create-review" component={CreateReview} />
          <Route exact path="/media" component={Mediatype} />
          <Route exact path="/watchlist" component={Watchlist} />
          <Route exact path="/subscriptions" component={Subscriptions} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/friends" component={SearchFriend} />
          <Route component={Login} />
        </Switch>        
        <Footer />
      </Router> 
      
     
    </div>   
    
    );
  }
}

export default App;