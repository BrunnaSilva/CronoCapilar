const express = require('express')
const UsersController = require('./controllers/UsersController')
const ProductsController = require('./controllers/ProductsController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const { response, request } = require('express');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/users', UsersController.index);
routes.post('/users', UsersController.create);

routes.get('/products', ProductsController.index);
routes.post('/products', ProductsController.create);
routes.delete('/products/:id', ProductsController.delete);

routes.get('/profile', ProfileController.index)

module.exports = routes;