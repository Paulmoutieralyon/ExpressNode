const connection = require('./conf');
const express = require('express');
const bodyParser = require('body-parser');
const express = require('express') ; 
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'tmp/'});

const app = express();
const port = 3000;

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));


app.post('/uploaddufichier', upload.array('monfichier'), function (req, res, next) {
  // traitement du formulaire
})

app.post('/uploaddufichier', upload.single('monfichier'), function (req, res, next) {
  fs.rename(req.file.path, 'public/images/' + req.file.originalname, function(err){
    if (err) {
        res.send('problème durant le déplacement');
    } else {
        res.send('Fichier uploadé avec succès');
    }
  });
})






// ////////////// Méthode DELETE sur MOVIES
// app.delete('/api/movies/:id', (req, res) => {
//   const idMovie = req.params.id;
//   // 
//   connection.query('DELETE FROM movie WHERE id = ?', [idMovie], err => {
//     // 
//     if (err) {
//       console.log(err);
//       res.status(500).send("Erreur lors de la suppression d'un employé");
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// app.listen(port, (err) => {
//   if (err) {
//     throw new Error('Something bad happened...');
//   }

//   console.log(`Server is listening on ${port}`);
// });
// app.post('/api/movies', (req, res) => {
//   // récupération des données envoyées
//   const formData = req.body;

//   // connexion à la base de données, et insertion de l'employé
//   connection.query('INSERT INTO movie SET ?', formData, (err, results) => {

//     if (err) {
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       console.log(err);
//       res.status(500).send("Erreur lors de la sauvegarde d'un employé");
//     } else {
//       // Si tout s'est bien passé, on envoie un statut "ok".
//       res.sendStatus(200);
//     }
//   });
// });

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});