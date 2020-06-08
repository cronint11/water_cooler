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
  handle: "Jessie87",
  profileThumb: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
  review: 'A visually breathtaking, long-fuse action movie whose unconventional thrills could be described as many things — from tantalizing to tedious — but never "artificially intelligent."',
  reviewID: 0
}, {
  poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  stars: "4.5",
  reviewTitle: "SFX, Story, and Cinematics stand the test of time!",
  mediaTitle: "The Matrix",
  rating: "R",
  handle: "Buttered Rum Popcorn",
  profileThumb: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
  review: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  reviewID: 1
},
{
  poster: "https://ae01.alicdn.com/kf/HTB1QszXdjfguuRjSspaq6yXVXXas/Horror-Film-The-Shining-poster-Kraft-paper-print-painting-Poster-home-Decorative-DIY-Wall-Sticker-Home.jpg_q50.jpg",
  stars: "5",
  handle: "dummy",
  reviewTitle: "A classic you won't want to miss, Jack Nicholson delivers",
  mediaTitle: "The Shining",
  rating: "R",
  profileThumb: "https://randomuser.me/api/portraits/thumb/men/37.jpg",
  review: "Heeeeere's Johnny....need we say more?",
  reviewID: 2
},{
  poster: "https://m.media-amazon.com/images/M/MV5BMDExNDM3OGQtYjI3ZC00MmE0LWE0OGEtMzgxZDY2MDE1MDFjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
  stars: "4",
  reviewTitle: "A Journey Worth Taking",
  mediaTitle: "Secondhand Lions",
  rating: "PG",
  handle: "Jessie87",
  profileThumb: "https://randomuser.me/api/portraits/thumb/women/24.jpg",
  review: 'A coming-of-age story about a shy, young boy sent by his irresponsible mother to spend the summer with his wealthy, eccentric uncles in Texas.',
  reviewID: 3
}, {
  poster: "https://m.media-amazon.com/images/M/MV5BNmExMTkyYjItZTg0YS00NWYzLTkwMjItZWJiOWQ2M2ZkYjE4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  stars: "3.5",
  reviewTitle: "If Only Coding Was This Much Fun",
  mediaTitle: "Hackers",
  rating: "PG-13",
  handle: "Buttered Rum Popcorn",
  profileThumb: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
  review: "Hackers are blamed for making a virus that will capsize five oil tankers.",
  reviewID: 4
},
{
  poster: "https://m.media-amazon.com/images/M/MV5BZTg5YmM5NzktN2Q0OS00YzE1LThkOTktNTE1NTJkZmExNmIxXkEyXkFqcGdeQXVyNDAxNjkxNjQ@._V1_SX300.jpg",
  stars: "3",
  reviewTitle: "When I think of Sandra Bullock and Dennis Miller as prognosticators, but this film is very much so!",
  mediaTitle: "The Net",
  rating: "PG-13",
  handle: "dummy",
  profileThumb: "https://randomuser.me/api/portraits/thumb/men/37.jpg",
  review: "A computer programmer stumbles upon a conspiracy, putting her life and the lives of those around her in great danger.",
  reviewID: 5
}];

function Feed(props) {
  return (
    <div>
      <Container fluid>
        <Row>
        <Col className="header-col"><img className="small-img" src={watercooler} alt="water cooler logo"></img>Movie Reviews</Col>
        </Row>
      </Container>
      {dummyFeed.map((item, index) => <Review review={{...item, index}} key={index} />)}
    </div>
  );
};

export default Feed;