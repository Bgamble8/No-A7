const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const port = process.env.port || 3000;

app.listen(port);

app.get('/',(req,res) => {
    res.render('index');
});
