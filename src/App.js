import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Card, Container, Jumbotron } from 'react-bootstrap';
import Darkmode from 'darkmode-js';

const jumbotronStyle = {
  backgroundColor: 'lightblue',
};

new Darkmode().showWidget();

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Water Cooler</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#Log_In">Log In</Nav.Link>
        <Nav.Link href="#reviews">Reviews</Nav.Link>
        <Nav.Link href="#subscription_list">Subscriptions</Nav.Link>
        <Nav.Link href="#friend_list">Friends</Nav.Link>
      </Nav>      
      </Navbar>
      <Jumbotron fluid style={jumbotronStyle}>
      <Container>
    <h2>When you thirst for new media!</h2>
    <p>
      We know movies, music, tv shows, books, podcasts, video games and more!
    </p>
      </Container>
    </Jumbotron>
     
      <h4>Login</h4>
      <span>handle:</span><input placeholder="username"></input>
      <span>password:</span><input type="password" placeholder="password"></input>

      <div container>      
      <Card style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>
     <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </div>
      

    </div>
  );
  
}



export default App;
