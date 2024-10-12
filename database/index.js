require('dotenv').config({path: './config/.env'});

const mongoose = require('mongoose'); // recupere la bibliotheque mongoose

mongoose.connect(process.env.MONGO_URI).then( ()=> console.log('connexion db ok')).catch( err =>console.log(err));