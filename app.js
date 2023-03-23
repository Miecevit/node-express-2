const express = require('express');
const bodyParser = require('body-parser');

const urlEncodedParser = bodyParser.urlencoded({extended:false});

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('form');
});

app.get('/form_cevap', (req,res) => {
    var data = req.query;
    console.log(data);
    res.render('cevap', {data});
});

app.post('/form_cevap',urlEncodedParser, (req,res) => {
    var data = req.body;
    console.log(data);
    res.render('cevap', {data});
});