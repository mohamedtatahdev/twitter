const mongoose = require('mongoose'); //Importe la bibliothèque Mongoose pour interagir avec MongoDB.
const schema = mongoose.Schema; //Définit une constante pour utiliser le constructeur de schémas de Mongoose.


const tweetSchema = schema({
  content: {
    type: String,
    maxlength: [140, 'Tweet trop long' ],
    minlength: [1, 'Tweet trop court'],
    required: [true, 'Champ requis']
  },
  author: { type: schema.Types.ObjectId, ref: 'user', required: true }
});//Crée un schéma pour les tweets, spécifiant que le champ content est une chaîne de caractères avec une longueur entre 1 et 140, et il est obligatoire.

const Tweet = mongoose.model('tweet', tweetSchema); 
//Crée un modèle basé sur le schéma tweetSchema pour la collection tweet dans MongoDB.

module.exports = Tweet;
//Exporte le modèle Tweet pour l'utiliser ailleurs dans l'application.
