const express = require('express');
const app = express();

var hbs = require('hbs');

require('./hbs/helpers');

/*
 *HEROKU
 */
const port = process.env.PORT || 3000;

//middleware
app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'ReNé'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});