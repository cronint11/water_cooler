import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import watercooler from "../images/gold-circle.png";

import Review from './Review';
import dummyFeed from '../dummy_data/feed.json';
import DynamicHeader from './DynamicHeader';

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',
//   database: 'quasi'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

// connection.query('SELECT * FROM friends', (err,rows) => {
//   if(err) throw err;

//   console.log('Data received from Db:');
//   console.log(rows);
//   let userFeed = rows
//   return userFeed
// });

// let trueFeed = class {
//   constructor(poster, stars, reviewTitle, mediaTitle, rating, profileThumb, review) {
//     this.poster = poster;
//     this.starts = stars;
//     this.reviewTitle = reviewTitle;
//     this.mediaTitle = mediaTitle;
//     this.rating = rating;
//     this.profileThumb = profileThumb;
//     this.review = review;
//   }
// };


function Feed(props) {
  const style= {
    headerBuffer: {
      paddingTop: '100px'
    }
  }
  return (
    <div>
      {/* <Container fluid>
        <Row>
          <Col className="header-col"><img className="small-img" src={watercooler} alt="water cooler logo"></img>Movie Reviews</Col>
        </Row>
      </Container> */}
      <DynamicHeader headerTitle={'Movie Reviews'} />
      <div style={style.headerBuffer}>
        {dummyFeed.map((item, index) => <Review review={{ ...item, index }} key={index} />)}
      </div>
      {/* {trueFeed.map((item, index) => <Review review={item} key={index} />)} */}
    </div>
  );
};

export default Feed;