import React, { Component } from 'react';
import '../App.css';
import logo from '../watercooler.jpg';
import {  BrowserRouter as Router, Link } from "react-router-dom";

import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';


class Login extends Component {
  
    render() {
      
      return ( 
        <div className="login-container">
         <Row>
          <Col>
          <img src={logo} className="mx-auto d-block login-image" responsive height="500" alt=""/> 
          </Col>            
           <Form className="login-form">           
            <h1 className="text-center">Water Cooler</h1><br></br>      
            {/* <h3 className="text-center">Welcome</h3> */}
            <FormGroup>
              {/* <Label>Email</Label> */}
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              {/* <Label>Password</Label> */}
              <Input type="Password" placeholder="Password" />
            </FormGroup>
            <Button className="btn-lg btn-block" id="login-btn">
                {/* btn-lg btn-dark btn-block */}
              Log In
            </Button>
            <div className="text-center pt-3">
              Or continue with your Social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3"/>
            <div className="text-center">
              <a href="/sign-up">Sign Up</a>
              <span className="p-2">|</span>
              <a href="/forgot-password">Forgot Password</a>
            </div>
           </Form>          
          </Row>

          <Row className="bottom-nav">
          <Col>
          <a>Home</a>
          </Col>
          <Col>
          <Link to='/reviews'>Reviews</Link>
          </Col>
          <Col>
          <a>What's Hot</a>
          </Col>
          </Row>
          </div>
      );
    }
}

export default Login;