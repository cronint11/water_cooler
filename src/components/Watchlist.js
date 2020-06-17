import React from 'react';
import { Row, Col, Container, Form } from 'reactstrap';
import { FormControl, Button, InputGroup } from 'react-bootstrap';
import watercooler from "../images/gold-circle.png";
import DynamicHeader from './DynamicHeader';

import watchlist from "../dummy_data/watchlist.json";

class Watchlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watchlist: watchlist["movies"],
      mediaType: "movies"
    };
  };

  render() {

    var style= {
      headerBuffer: {
        paddingTop: '100px'
      }
    }
    return (
      <div>
        <DynamicHeader headerTitle={'Watchlist'}/>

        
        <div style={style.headerBuffer}>
        <Container fluid>
          {/* <Row>
            <Col className="header-col"><img className="small-img" alt="" src={watercooler}></img>Watchlist</Col>
          </Row> */}

          <Row>
            <Form inline className="search-form">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button id="search-button">Search</Button>
            </Form>
          </Row>


          {this.state.watchlist.map((media, index) =>
            <Row>
              <img className="poster" alt={media.title} src={media.poster}></img>
              <Col className="watchlist-text">
                <Row>{media.title}</Row>
                <Row>{media.genre.map((genre,index) => <span>{index>0?", ": ""}{genre}</span>)}</Row>
                <Row>{media.plot}</Row>
                {media.consumed?<Row>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="review">Review</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl as="textarea" aria-label="With textarea" />
                  </InputGroup>
                </Row>:<span></span>}
              </Col>
            </Row>
          )}
          {/* <br></br>
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
                  <FormControl as="textarea" aria-label="With textarea" className="review-form" />
                </InputGroup>
              </Row>
            </Col>
          </Row> */}

        </Container>
        </div>
      </div>

    )
  };
};

export default Watchlist;