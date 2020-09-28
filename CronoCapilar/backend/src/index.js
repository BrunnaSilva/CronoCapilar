const { request } = require('express');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors()); //Definir acesso para o Front-End
app.use(express.json()); //Indicando que o metodo post trás sempre um JSOn
app.use(routes);
app.listen(3333);

/**
 * Rota / Recurso 
 * 
 * Metodos HTTP 
 * GET: Buscar/listar uma informação no backend
 * POST: Criar uma informaçao no backend 
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 * 
 * Banco de Dados
 * Driver: SELECT * FROM users 
 * Query Builder: table('users').select('*').where()
 */
