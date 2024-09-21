const router = require('express').Router();
// Cette ligne crée une nouvelle instance de routeur en utilisant le module 'express'.
// 'Router()' permet de définir des routes indépendantes dans des modules séparés. 
// Cela permet d'organiser les routes de l'application de manière modulaire.

router.get('/', (req, res) => {
  res.render('home');
})
// Ici, on définit une route HTTP GET sur l'URL racine ('/').
// Quand un utilisateur accède à la page d'accueil ('/'), le serveur va répondre en rendant le template 'home'.
// 'res.render('home')' va chercher un fichier 'home.pug' (ou tout autre moteur de template configuré) dans le dossier des vues, et l'envoyer comme réponse.

module.exports = router;
// Cette ligne exporte l'objet router, ce qui permet de l'utiliser dans d'autres fichiers de l'application.
// Cela permet de centraliser la logique des routes dans des fichiers séparés, et de les importer là où elles sont nécessaires.