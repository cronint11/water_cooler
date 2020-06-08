import React from 'react';
import { Media, Row, Col, Container } from 'reactstrap';
import movies from "../movies.jpg";
import books from "../books.jpg";
import podcasts from "../podcasts.jpg";
import music from "../music.jpg";
import watercooler from "../gold-circle.png";

const Mediatype = () => {
  return (
    <div>
    <Container fluid>
        <Row>
          <Col className="header-col"><img className="small-img" alt="" src={watercooler}></img>Our Media</Col>
        </Row>
    </Container>
    <Row>
    <Col>
    <Media className="movies">
      <Media className="media-img" left href="#">
        <Media src={movies} alt="movies" />
      </Media>
      <Media className="media-body" body>
        <Media className="movies-heading" heading>
          Movies
        </Media>
        <span className="movies-heading">Our strong point is movie reviews, we have hundreds of them! </span>
      </Media>
    </Media>
    </Col>
    </Row>
    <Media className="books">
      <Media className="media-img" left href="#">
        <Media src={books} alt="books" />
      </Media>
      <Media body>
        <Media className="books-heading" heading>
          Books
        </Media>
        <span className="books-heading">Who doesn't love a good book to read, we sure do!</span>
      </Media>
    </Media>
    <Media className="podcasts">
      <Media className="media-img" left href="#">
        <Media src={podcasts} alt="podcasts" />
      </Media>
      <Media body>
        <Media className="podcasts-heading" heading>
          Podcasts
        </Media>
        <span className="podcasts-heading">We are partnering with leading edge Tech Podcast providers - coming soon!</span>
      </Media>
    </Media>
    <Media className="music">
      <Media className="media-img" left href="#">
        <Media src={music} alt="music" />
      </Media>
      <Media body>
        <Media className="music-heading" heading>
          Music
        </Media>
        <span className="music-heading">We know our tunes, do you?</span>
      </Media>
    </Media>

    </div>  
    
  );
};

export default Mediatype;