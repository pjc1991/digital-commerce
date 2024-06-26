const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const commonRoute = require('./common/route');

// express app
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes

app.use('/', commonRoute);


app.listen(3000);