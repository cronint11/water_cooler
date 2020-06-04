// Public libraries
import React from "react";
import { Link, Redirect } from "react-router-dom";
// import { GlobalContext } from "../App";
import { Container, Row, Col } from "reactstrap";

// Our libraries
import { Button, Form, Input, styleFontBlue, styleFontRed, styleImg } from "../components/Form";
import watercooler from "../gold-circle.png";
// import watercooler from "../water-cooler.png";

function Signup(props) {
  // const context=React.useContext(GlobalContext);

  return (
    <Container>
      <Row className="mt-3">
        <Col xs="12" md="6">
          <h2 className="text-center" style={styleFontBlue}>Welcome to Water Cooler</h2>
          <br />
          <img src={watercooler} alt="" style={styleImg} />
        </Col>
        <Col xs="12" md="6">
          <Form className="login-form">
            <h2 className="text-center new-media" style={styleFontBlue}>Thirsty? - Sign up now!</h2><br></br>
            <Input type="username" placeholder="Username / Handle" />
            <br />
            <Input type="password" placeholder="Password" />
            <br />
            <Button className="btn-lg btn-block" onClick={() => { return <Redirect to="/feed" />; }}>Sign Up</Button>
            <div className="text-center">
            <span className="p-2">Have an account?</span><Link to="/login">Login</Link> 
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
