DROP DATABASE if EXISTS quasi;
CREATE DATABASE quasi;

USE quasi;

CREATE TABLE users (
  handle varchar(255) NOT NULL,
  pwd varchar(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  user_id int(10) unsigned NOT NULL auto_increment,
  PRIMARY KEY (user_id),
  UNIQUE KEY email (email)
);

CREATE TABLE friends (
  friend_id int(10) unsigned NOT NULL auto_increment,
  user_id_1 int(10) unsigned NOT NULL,
  user_id_2 int(10) unsigned NOT NULL,
  accepted TINYINT(1) DEFAULT FALSE,
  PRIMARY KEY (friend_id)
);

CREATE TABLE subscriptions (
  subscriptions_id int(10) unsigned NOT NULL auto_increment,
  user_id int(10) unsigned NOT NULL,
  subscription_id int(10) unsigned NOT NULL,
  PRIMARY KEY (subscriptions_id)
);

CREATE TABLE subscription (
  name VARCHAR(255) NOT NULL,
  type_id int(10) unsigned NOT NULL,
  subscription_id int(10) unsigned NOT NULL,
  PRIMARY KEY (subscription_id)
);

CREATE TABLE medias (
  medias_id int(10) unsigned NOT NULL auto_increment,
  user_id int(10) unsigned NOT NULL,
  media_id int(10) unsigned NOT NULL,
  consumed TINYINT(1) DEFAULT FALSE,
  PRIMARY KEY (medias_id)
);

CREATE TABLE media (
  medias_id int(10) unsigned NOT NULL auto_increment,
  type_id int(10) unsigned NOT NULL,
  title VARCHAR(255),
  genre_id int(10) unsigned NOT NULL,
  PRIMARY KEY (medias_id)
);

CREATE TABLE media_type (
  type_id int(10) unsigned NOT NULL auto_increment,
  name VARCHAR(255),
  PRIMARY KEY (type_id)
);

CREATE TABLE genre (
  genre_id int(10) unsigned NOT NULL auto_increment,
  name VARCHAR(255),
  PRIMARY KEY (genre_id)
);

CREATE TABLE reviews (
  review_id int(10) unsigned NOT NULL auto_increment,
  user_id int(10) unsigned NOT NULL,
  media_id int(10) unsigned NOT NULL,
  review tinytext,
  rating TINYINT,
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (review_id)
);

CREATE TABLE comments (
  comment_id int(10) unsigned NOT NULL auto_increment,
  table_name VARCHAR(255),
  table_id int(10) unsigned NOT NULL,
  user_id int(10) unsigned NOT NULL,
  comment tinytext,
  time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (comment_id)
);

CREATE TABLE reactions (
  reaction_id int(10) unsigned NOT NULL auto_increment,
  table_name VARCHAR(255),
  table_id int(10) unsigned NOT NULL,
  user_id int(10) unsigned NOT NULL,
  reaction VARCHAR(255),
  PRIMARY KEY (reaction_id)
);