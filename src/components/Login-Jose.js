import React, { Component } from 'react';
// import '../App.css';
import watercooler from '../watercooler.png';
import { Link } from "react-router-dom";

import { Row, Col } from 'reactstrap';
import { Button, Form, Input } from '../components/Form';

import { FacebookLoginButton } from 'react-social-login-buttons';


class Login extends Component {
  constructor(props) {
    super(props);
    this.styleFontBlue = {
      color: "#033d5b"
    };
    this.styleImg = {
      marginLeft: "auto",
      marginRight: "auto"
    };
    this.styleFontRed = {
      color: "#88001b"
    };
    this.bgImg = {
      width: "100%"
    }
  }



  render() {

    return (
      <div className="login-container">
        <Row>
          <Col>
            <h1 className="text-center" style={this.styleFontBlue}>When you thirst for new media!</h1>
            <br />
            <img src={watercooler} alt="" style={this.styleImg} responsiveHeight="500" className="mx-auto d-inlineblock"/>
          </Col>
          <Col>
            <Form className="login-form">
              <h1 className="text-center" style={this.styleFontBlue}>Water Cooler</h1><br></br>
              <Input type="email" placeholder="Email" />
              <br />
              <Input type="Password" placeholder="Password" />
              <br />
              <Button className="btn-lg btn-block" id="login-btn">
                Log In
            </Button>
              <div className="text-center" style={this.styleFontRed}>
                Or continue with your Social account
            </div>
              <FacebookLoginButton className="mt-3 mb-3" />
              <div className="text-center">
                <Link href="/sign-up">Sign Up</Link>
                <span className="p-2">|</span>
                <Link href="/forgot-password">Forgot Password</Link>
              </div>
            </Form>
          </Col>
        </Row>

        <Row className="bottom-nav">
          <Col>
            <Link>Home</Link>
          </Col>
          <Col>
            <Link to='/reviews'>Reviews</Link>
          </Col>
          <Col>
            <Link>What's Hot</Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;