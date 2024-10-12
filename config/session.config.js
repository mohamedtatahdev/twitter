const { app } = require('../app');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config({path: './config/.env'});

// Configuration de la session
app.use(session({
  secret:  process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: false,
    maxAge: 1000 * 60 * 60 * 24 * 14 // 14 jours
  },
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    ttl: 60 * 60 * 24 * 14, // Durée de vie de la session (14 jours)
  }),
}));
