'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco
mongoose.connect('mongodb+srv://gbarska:Passw0rd@cluster0-gawmy.azure.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

//carregar os models
const Product = require('./models/product');

//carregar as Rotas
const indexRoute = require('./routes/index');
const productsRoute = require('./routes/products');
const usersRoute = require('./routes/users');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/',indexRoute);
app.use('/products',productsRoute);

app.use('/users',usersRoute);


module.exports = app;