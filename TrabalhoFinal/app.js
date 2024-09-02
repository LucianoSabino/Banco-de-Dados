// Importações
const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine('handlebars', engine({defaultLayout : 'index'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.listen(3030, () => {
    console.log("API RODANDO");
    console.log("http://localhost:3030/")
});