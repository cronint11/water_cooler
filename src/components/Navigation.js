import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { GlobalContext } from "../App";

function Navigation(props) {
  const context=React.useContext(GlobalContext);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Water Cooler</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link hidden={context.state.authenticated}  href="log_in">Log In</Nav.Link>
        <Nav.Link hidden={context.state.authenticated}  href="#sign_up">Sign Up</Nav.Link>
        <Nav.Link hidden={!context.state.authenticated} href="log_out">Log Out</Nav.Link>
        <Nav.Link href="#reviews">Reviews</Nav.Link>
        <Nav.Link href="#subscription_list">Subscriptions</Nav.Link>
        <Nav.Link href="#friend_list">Friends</Nav.Link>
      </Nav>      
      </Navbar>
    </div>
  );
}

export default Navigation;