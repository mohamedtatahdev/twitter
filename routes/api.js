const router = require('express').Router(); // Crée une instance du routeur Express
const tweets = require('./api.tweets');     // Importe les routes ou le contrôleur lié aux tweets

router.use('/tweets', tweets);              // Utilise les routes de tweets avec le préfixe '/tweets'

module.exports = router;                    // Exporte le routeur pour l'utiliser dans d'autres fichiers
