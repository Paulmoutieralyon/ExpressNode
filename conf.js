const  mysql = require('mysql');
const  connection = mysql.createConnection({
host :  'localhost', // adresse du serveur
user :  'root', // le nom d'utilisateur
password :  'Paulmoutier17', // le mot de passe
database :  'movie', // le nom de la base de données
port : 8889
});


module.exports = connection;
