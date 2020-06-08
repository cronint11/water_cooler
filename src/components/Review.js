import React, { useState } from 'react';
import { Container, Row, Col, Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Card, ProfileThumb, styleFontBlue, styleFontRed } from './Form';
import Stars from './Stars';

function Review(props) {
  const [tooltipOpenDiscussion, setTooltipOpenDiscussion] = useState(false);
  const toggleDiscussion = () => setTooltipOpenDiscussion(!tooltipOpenDiscussion);
  const [tooltipOpenAdd, setTooltipOpenAdd] = useState(false);
  const toggleAdd = () => setTooltipOpenAdd(!tooltipOpenAdd);
  const [tootipOpenHandle, setToottipOpenHandle] = useState(false);
  const toggleHandle = () => setToottipOpenHandle(!tootipOpenHandle);

  // reviewClick = () => {
    
  // }

  return <Card>
    <Container className="pt-2">
      <Row>
        <Col xs="auto">
          <img src={props.review.poster} alt="" style={{ width: '90px' }} />
          <br />
          <Stars stars={props.review.stars} />
          <br />
          <Row>
            <Col xs="auto" className="d-block mx-auto">
              <FontAwesomeIcon  id={`discussion-${props.reviewID}`} style={styleFontRed} icon={{ prefix: 'fas', iconName: 'comments' }} />
              <Tooltip target={`discussion-${props.reviewID}`} isOpen={tooltipOpenDiscussion} toggle={toggleDiscussion}>Go to discussion</Tooltip>
            </Col>
            <Col xs="auto" className="d-block mx-auto">
              <FontAwesomeIcon  id={`add-${props.reviewID}`} style={styleFontRed} icon={{ prefix: 'fas', iconName: 'hand-holding-water' }} />
              <Tooltip target={`add-${props.reviewID}`} isOpen={tooltipOpenAdd} toggle={toggleAdd}>Add to water cooler</Tooltip>
            </Col>
          </Row>
        </Col>
        <Col xs="10">
          <Row>
            <Col>
              <h3 style={styleFontBlue}>{props.review.reviewTitle}</h3>
              <h6 style={styleFontRed}>{props.review.mediaTitle} ({props.review.rating})</h6>
            </Col>
            <Col>
              <ProfileThumb id={`thumb-${props.review.reviewID}`} src={props.review.profileThumb} alt="" />
              <Tooltip target={`thumb-${props.review.reviewID}`} isOpen={tootipOpenHandle} toggle={toggleHandle}>{props.review.handle}</Tooltip>
            </Col>
          </Row>
          <p style={styleFontBlue}>{props.review.review}</p>
        </Col>
      </Row>
    </Container>
  </Card>;
}

export default Review;