import React from 'react';
import { Container, Row, Col } from "reactstrap";
import watercooler from "../images/gold-circle.png";

class DynamicHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { headerTitle: props.headerTitle };
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="header-col"><img className="small-img" alt="" src={watercooler}></img>{this.state.headerTitle}</Col>
        </Row>
      </Container>
    )
  }
}

export default DynamicHeader;