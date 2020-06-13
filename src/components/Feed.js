import React from 'react';


import Review from './Review';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'quasi'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

con.query('SELECT * FROM friends', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:');
  console.log(rows);
  let userFeed = rows
  return userFeed
});


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
  poster: 
  stars: "4.5",
  reviewTitle: "SFX, Story, and Cinematics stand the test of time!",
  mediaTitle: "The Matrix",
  rating: "R",
  profileThumb: "https://randomuser.me/api/portraits/thumb/men/42.jpg",
  review: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
}];

let trueFeed = class {
  constructor(poster, stars, reviewTitle, mediaTitle, rating, profileThumb, review) {
    this.poster = poster;
    this.starts = stars;
    this.reviewTitle = reviewTitle;
    this.mediaTitle = mediaTitle;
    this.rating = rating;
    this.profileThumb = profileThumb;
    this.review = review;
  }
};


function Feed(props) {
  return (
    <div>
      {trueFeed.map((item, index) => <Review review={item} key={index} />)}
    </div>
  );
};

export default Feed;