import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Card, ProfileThumb, styleFontBlue, styleFontRed } from './Form';
import Stars from './Stars';

function Review(props) {

  return <Card>
    <Container className="pt-2">
      <Row>
        <Col xs="2" >
          <img src={props.review.poster} alt="" style={{ width: '90px' }} />
          <br />
          <Stars stars={props.review.stars} />
        </Col>
        <Col xs="10">
          <Row>
            <Col>
              <h3 style={styleFontBlue}>{props.review.reviewTitle}</h3>
              <h6 style={styleFontRed}>{props.review.mediaTitle} ({props.review.rating})</h6>
            </Col>
            <Col>
              <ProfileThumb src={props.review.profileThumb} alt="" />
            </Col>
          </Row>
          <p style={styleFontBlue}>{props.review.review}</p>
        </Col>
      </Row>
    </Container>
  </Card>;
}

export default Review;