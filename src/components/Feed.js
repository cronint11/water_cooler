import React from 'react';
import Review from './Review';
import { Container, Row, Col } from 'react-bootstrap';
import watercooler from "../gold-circle.png";

const dummyFeed = [{
  poster: "http://www.omdbapi.com/src/poster.jpg",
  stars: "4",
  reviewTitle: "Beautiful Dystopia",
  mediaTitle: "Blade Runner 2049",
  rating: "R",
  profileThumb: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
  review: 'A visually breathtaking, long-fuse action movie whose unconventional thrills could be described as many things — from tantalizing to tedious — but never "artificially intelligent."'
}, {
  poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  stars: "4.5",
  reviewTitle: "SFX, Story, and Cinematics stand the test of time!",
  mediaTitle: "The Matrix",
  rating: "R",
  profileThumb: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
  review: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
},
{
  poster: "https://ae01.alicdn.com/kf/HTB1QszXdjfguuRjSspaq6yXVXXas/Horror-Film-The-Shining-poster-Kraft-paper-print-painting-Poster-home-Decorative-DIY-Wall-Sticker-Home.jpg_q50.jpg",
  stars: "5",
  reviewTitle: "A classic you won't want to miss, Jack Nicholson delivers",
  mediaTitle: "The Shining",
  rating: "R",
  profileThumb: "https://randomuser.me/api/portraits/thumb/men/37.jpg",
  review: "Heeeeere's Johnny....need we say more?"
}];

function Feed(props) {
  return (
    <div>
      <Container fluid>
        <Row>
        <Col className="header-col"><img className="small-img" src={watercooler}></img>Movie Reviews</Col>
        </Row>
      </Container>
      {dummyFeed.map((item, index) => <Review review={item} key={index} />)}
    </div>
  );
};

export default Feed;