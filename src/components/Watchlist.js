import React from 'react';
import { Row, Col, Container, Form } from 'reactstrap';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import watercooler from "../images/gold-circle.png";
import poster from "../images/watercooler-poster.jpg";

const Watchlist = () => {
  return (   
    <div>
    <Container fluid>
    <Row>
     <Col className="header-col"><img className="small-img" alt="" src={watercooler}></img>Watchlist</Col>
    </Row>

    <Row>
    <Form inline className="search-form">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button id="search-button">Search</Button>
    </Form>  
    </Row> 

    <Row>
      <img className="poster" alt="" src={poster}></img>
      <Col className="watchlist-text">
        <Row>Title</Row>
        <Row>Genre</Row>
        <Row>Description</Row>
        <Row>
        <InputGroup>
           <InputGroup.Prepend>
              <InputGroup.Text id="review">Review</InputGroup.Text>
           </InputGroup.Prepend>
         <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>   
        </Row>
      </Col>    
    </Row><br></br>

    <Row>
      <img className="poster" alt="" src={poster}></img>
      <Col className="watchlist-text">
        <Row >Title</Row>
        <Row>Genre</Row>
        <Row>Description</Row>
        <Row>
        <InputGroup>
           <InputGroup.Prepend>
              <InputGroup.Text id="review">Review</InputGroup.Text>
           </InputGroup.Prepend>
         <FormControl as="textarea" aria-label="With textarea" className="review-form"/>
        </InputGroup>   
        </Row>
      </Col>    
    </Row> 

    </Container>
    </div>  
    
  );
};

export default Watchlist;