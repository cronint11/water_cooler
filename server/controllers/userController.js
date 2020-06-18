const User = require('../models').User;
const md5 = require('md5');

module.exports = {
  create(req, res) {
    return User.create({
      handle: req.body.handle,
      email: req.body.email,
      pwd: md5( req.body.pwd )
    })
    .then( user => res.status(201).send(user))
    .catch( err => res.status(400).send(err));
  }
};