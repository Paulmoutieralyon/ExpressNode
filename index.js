const express = require("express");
const app = express();
const port = 3000;

const connection = require("./conf");

// écoute de l'url "/api/movies
app.get("/api/movies", (req, res) => {
  connection.query("SELECT * from movie", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des films");
      console.log(err)
    } else {
      res.json(results);
    }
  });
});

// écoute de l'url "/api/movies/names
app.get("/api/movies/name", (req, res) => {
  connection.query("SELECT name from movie", (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des films");
    } else {
      res.json(results);
    }
  });
});

app.listen(port, err => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log(`Server is listening on ${port}`);
});
const bodyParser = require('body-parser');
// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));