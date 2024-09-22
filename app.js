const express = require('express');// Importe le module Express, qui est un framework web pour Node.js.
const morgan = require('morgan');// Importe le module Morgan, un middleware de logging pour enregistrer les requêtes HTTP faites au serveur.
const path = require('path');// Importe le module 'path', une bibliothèque native de Node.js pour gérer les chemins de fichiers et de répertoires.
const index = require('./routes');// Importe le fichier `routes.js` situé dans le répertoire courant. Ce fichier devrait contenir les définitions des routes de l'application.
require('./database'); // recupere la database

const app = express();// Crée une instance de l'application Express. C'est cette instance qui est utilisée pour définir les routes, les middlewares, etc.
const port = process.env.PORT || 3000;// Définit le port sur lequel le serveur va écouter. Si une variable d'environnement `PORT` est définie, elle est utilisée ; sinon, le port 3000 est choisi par défaut.


app.set('views', path.join(__dirname, 'views'));// Indique à Express où se trouvent les vues (templates). Ici, on spécifie que les templates se trouvent dans le répertoire 'views', qui est dans le répertoire de travail courant (défini par `__dirname`).
app.set('view engine', 'pug');// Définit le moteur de rendu (view engine) comme étant 'pug'. Cela permet à Express de rendre des fichiers de templates `.pug` comme pages HTML.

app.use(morgan('short'));// Utilise Morgan avec le format 'short' pour enregistrer chaque requête HTTP faite au serveur. Cela affiche dans la console des informations sur les requêtes entrantes (méthode HTTP, URL, temps de réponse, etc.).
app.use(express.static(path.join(__dirname, 'public')));// Définit un middleware pour servir les fichiers statiques (CSS, JavaScript, images, etc.) à partir du répertoire 'public'. Cela permet aux clients de récupérer ces fichiers directement.
app.use(express.json());// Middleware pour traiter les requêtes dont le corps est au format JSON. Cela permet de lire et d'analyser les données JSON dans `req.body`.
app.use(express.urlencoded({ extended: true }));// Middleware pour traiter les requêtes avec des données encodées dans le format URL (formulaires HTML). L'option `extended: true` permet de gérer des objets plus complexes.
app.use(index);// Utilise les routes définies dans le fichier `routes.js` (ou similaire), ce qui permet de gérer différentes requêtes HTTP selon les routes configurées.


app.listen(port);// Démarre le serveur et lui fait écouter sur le port défini précédemment. Le serveur sera accessible via l'URL http://localhost:3000 (ou sur le port défini dans `process.env.PORT`).
