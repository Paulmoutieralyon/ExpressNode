const  express  =  require ( ' express ' );
const  app  =  express ();
 port  =  3000 ;

app . get ( ' / ' , ( demande , réponse ) => {
  réponse . envoyer ( ' Bienvenue sur Express ' );
});

app . get ( ' / api / movies ' , ( demande , réponse ) => {
  réponse . envoyer ( ' Récupération de tous les films ' );
});

app . get ( ' / api / movies /: id ' , ( demande , réponse ) => {
  const  id  =  demande . params . id ;
  réponse . json ({id : id});
});

app . get ( ' / api / employee ' , ( demande , réponse ) => {
  réponse . sendStatus ( 304 );
});

app . get ( ' / api / employee /: name ' , ( demande , réponse ) => {
  réponse . statut ( 404 ). send ( ` impossible de trouver réutilisé $ { request . params . name } ` )

});

app . listen (port, ( err ) => {
  si (err) {
    jeter une  nouvelle  erreur ( ' Quelque chose de mauvais est arrivé ... ' );
  }

  console . log ( `le serveur est à l’écoute sur $ { port } ` );
});