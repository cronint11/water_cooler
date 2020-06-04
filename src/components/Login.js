// Public libraries
import React from "react";
import { Link, Redirect } from "react-router-dom";
// import { GlobalContext } from "../App";
import { Container, Row, Col } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";

// Our libraries
import { Button, Form, Input, styleFontBlue, styleFontRed, styleImg } from "../components/Form";
import watercooler from "../water-cooler.png";

class Login extends React.Component {

  onSubmit = () => {
    return <Redirect to="/feed" />
  }

  // const context=React.useContext(GlobalContext);

  render() {
    return (
      <Container>
        <Row className="mt-3">
          <Col xs="12" md="6">
            <h2 className="text-center" style={styleFontBlue}>When you thirst for new media!</h2>
            <br />
            <img src={watercooler} alt="" style={styleImg} />
          </Col>
          <Col xs="12" md="6">
            <Form className="login-form">
              <h2 className="text-center" style={styleFontBlue}>Water Cooler</h2><br></br>
              <Input type="email" placeholder="Email" />
              <br />
              <Input type="password" placeholder="Password" />
              <br />
              <Button className="btn-lg btn-block" onClick={this.onSubmit}>Log In</Button>
              <div className="text-center" style={styleFontRed}>
                Or continue with your Social account
            </div>
              <FacebookLoginButton className="mt-3 mb-3" />
              <div className="text-center">
                <Link to="/sign-up">Sign Up</Link>
                <span className="p-2">|</span>
                <Link to="/forgot-password">Forgot Password</Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
