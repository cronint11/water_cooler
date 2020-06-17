import React from 'react';
import { Media, Row, Col } from 'reactstrap';
// import movies from "../movies.jpg";
// import books from "../books.jpg";
// import podcasts from "../podcasts.jpg";
// import music from "../music.jpg";
import mediatype from "../utils/mediatype.json";
import DynamicHeader from "./DynamicHeader";

const Mediatype = (props) => {
  // { props.history.push()}

  const rowClicked = (rowID) => {
    props.history.push({
      pathname:"subscriptions",
      state: {media: rowID}
    });
  };

  const style= {
    headerBuffer: {
      paddingTop: '100px'
    }
  }
  
  return (
    <div>
      <DynamicHeader headerTitle="My Media" />
      <div style={style.headerBuffer}>
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

    </div>

  );
};

export default Mediatype;