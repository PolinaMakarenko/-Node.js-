const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const redis = require('redis');
const redisStore = require("connect-redis")(session);
const cors = require('cors');

const linkRouter = require('../routes/linkRouter');
const userRouter = require('../routes/userRouter');

const getSessionId = require('../middleware/getSessionId');

//Configure redis client
const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379,
    legacyMode:true 
})
redisClient.on('error', function (err) {
    console.log('Could not establish a connection with redis. ' + err);
});
redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
});

const sessionConfig = {
    store: new redisStore({
        host: 'localhost',
        port: 6379,
        client: redisClient,
        ttl: 1800,
        legacyMode:true 
    }),
    name: 'user_sid',
    secret: process.env.SESSION_SECRET ?? 'test', 
    resave: false, 
    saveUninitialized: false, 
    cookie: {
      // maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true, 
    },
};


module.exports = function configApp(app) {
  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.resolve('public')));

  redisClient.connect();

  app.use(session(sessionConfig));
  app.use(getSessionId);

  app.use('/link', linkRouter);
  app.use('/user', userRouter);

};