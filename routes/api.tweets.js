const router = require('express').Router();              // Crée une instance du routeur Express
const Tweet = require('../database/models/tweet.model'); // Importe le modèle de Tweet depuis la base de données

router.post('/', (req, res) => {                         // Route POST pour créer un nouveau tweet
  const body = req.body;                                 // Récupère les données envoyées par le formulaire
  const newTweet = new Tweet(body);                      // Crée un nouvel objet Tweet avec les données reçues
  newTweet.save()                                        // Sauvegarde le nouveau tweet dans la base de données
          .then(newTweet => res.redirect('/'))           // Si la sauvegarde réussit, redirige vers la page d'accueil
          .catch(err => {                                // Si une erreur survient
            const errors = Object.keys(err.errors)       // Récupère les messages d'erreur provenant de la validation
                             .map(key => err.errors[key].message);
            res.status(400).render('tweets/tweet-form', { errors }); // Rendu du formulaire avec les erreurs
          });
});

module.exports = router;                                 // Exporte le routeur pour être utilisé dans d'autres parties de l'application
