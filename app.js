const express = require('express');

const commonRoute = require('./common/route');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', commonRoute);


app.listen(3000);