import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './watercooler-big.png';
import Login from './components/Login-Jose.js';
import Reviews from './components/Reviews-test.js';

// import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

// import { FacebookLoginButton } from 'react-social-login-buttons';

class App extends Component {
  
    render() {    
      
      return ( 
       
          <Router>
            <div>      
                <Route exact path="/" component={Login} />
                <Route exact path="/reviews" component={Reviews} />
            </div>
          </Router>
  
      );
    }
}

export default App;