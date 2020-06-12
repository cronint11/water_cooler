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
          <Route exact path="/friends" component={SearchFriend} />
          <Route component={Login} />
        </Switch>
      </Router> 
      <h6 className="slogan">We know movies, music, tv shows, books, podcasts, video games and more...</h6>
      
      {/* <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Watchlist</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">Friends</Nav.Link>
          </Nav.Item>          
      </Nav> */}

      <Footer />
    </div>   
    
    );
  }
}

export default App;