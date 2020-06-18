const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
  res.send({ handle: req.user.handle, token: req.user.token });
});

router.post('/review', (req, res) => {
  db.Review.create({
      reviewTitle: req.body.title,
      review: req.body.review,
      userID: req.body.userID,
      mediaID: req.body.mediaID,
      rating: parseFloat(req.body.rating),
      spoiler: req.body.spoiler,
    })
    .then( review => res.json(review), err => res.sendStatus(500))
    .catch( err => res.sendStatus(500));
});

router.get('/reviews/:user', (req, res) => {
  db.Review.find({ userID: req.params.userID })
    .then(reviews => res.json(reviews), err => res.sendStatus(500))
    .catch(err => res.sendStatus(500));
});

module.exports = router;