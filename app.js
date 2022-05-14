const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser');
const Route = require('./routes/Route');


app.use('/', Route)


app.use('/static', express.static('public'))


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'))



app.listen(PORT, ()=>{
    console.log(`Server running on PORT: ${PORT}`)
})