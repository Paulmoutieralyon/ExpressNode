const express = require('express');
const app = express();
const port = 3000;

app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    }
    console.log(`Server is listening on ${port}`);
});

app.get('/', (request, response) => {
    response.send('Hellow world !')
})
app.get('/api/movies', (request, response) => {
    response.send('Récupération des films');
});
app.get('/api/movies/:id', (request, response) => {
    console.log("movies")
    response.json(request.params.id)
});




app.get('/api/employee', (request, response) => {
    let id = request.query.id
    console.log(id)
    if (id !== undefined) {
        response.status(404).send("Impossible de récupérer l'employé " + id);
    }
    else {
        response.status(304).end()
    }

});
