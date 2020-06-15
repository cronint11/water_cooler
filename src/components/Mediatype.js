import React from 'react';
import { Media, Row, Col, Container } from 'reactstrap';
// import movies from "../movies.jpg";
// import books from "../books.jpg";
// import podcasts from "../podcasts.jpg";
// import music from "../music.jpg";
import watercooler from "../images/gold-circle.png";
import mediatype from "../utils/mediatype.json";

const Mediatype = (props) => {
  // { props.history.push()}

  const rowClicked = (rowID) => {
    props.history.push({
      pathname:"subscriptions",
      state: {media: rowID}
    });
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col className="header-col"><img className="small-img" alt="" src={watercooler}></img>Our Media</Col>
        </Row>
      </Container>
      {mediatype.medias.map((media, index) =>
        <Row onClick={rowClicked.bind(this, media.class)}>
          <Col>
            <Media className={media.class}>
              <Media className="media-img" left>
                <Media src={media.img_src} alt={media.class}></Media>
              </Media>
              <Media className="media-body" body>
                <Media className={`${media.class}-heading`} heading>{media.class}</Media>
                <span className={`${media.class}-heading`}>{media.msg}</span>
              </Media>
            </Media>
          </Col>
        </Row>)}
    </div>

  );
};

export default Mediatype;