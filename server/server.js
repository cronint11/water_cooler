const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mysql = require('mysql2');
const authenticatedRoutes = require('./authenticatedRoutes');

const PORT = process.env.PORT || 3306;
const app = express();
app.use(logger('dev'));
app.use(cors());

const conn = mysql.createConnection({
  host: process.env.PUBLIC_URL || 'localhost',
  port: PORT,
  user: process.env.PUBLIC_URL ? 'jawsDB' : 'root',
  password: process.env.PUBLIC_URL ? 'jawsDB' : 'root'
});

const JWT_SECRET = 'h@(|<3r5!';

const db = require('.models');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function (username, password, cb) {
    // returning DB Mongo code...
    db.User.findOne({
        username: username
      })
      .then( user => {
        if (!user) {
          return cb(null, false, { message: 'Incorrect credentials' });
        }
        if (user.password===md5(password)) {
          return cb(null, user, { message: 'Credentials confirmed' });
        } else {
          return cb(null, false, { message: 'Incorrect credentials' });
        }
      }, error => cb(null, false, { message: 'Incorrect credentia1s' }))
      .catch( error => cb(null, false, { message: 'Incorrect credential5' }));
  }
));

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET
  },
  function (jwtPayload, cb) {
    // returning DB Mongo code...
    return db.User.findOne({_id:jwtPayload._id})
      .then( user => {
        const token = jwt.sign(user.toObject(), JWT_SECRET);
        return cb(null, { ...user.toObject(), token });
      })
      .catch( error => {
        return cb(error);
      });
  }
));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/register', (req, res) => {
  // returning DB Mongo code...
  db.User.create({
      username: req.body.username,
      password: md5(req.body.password)
  }).then( user => res.json(user), error => res.sendStatus(500))
    .catch( error => res.sendStatus(500));
});

app.post('/login', (req, res) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if(err || !user) {
      return res.status(400).json({
        message: 'Something done gone wrong.',
        user: user
      });
    }

    const token = jwt.sign(user.toObject(), JWT_SECRET);
    return res.json({ username: user.username, token });
  })(req, res);
});

app.use('/authenticated', passport.authenticate('jwt', { session: false }), authenticatedRoutes);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));