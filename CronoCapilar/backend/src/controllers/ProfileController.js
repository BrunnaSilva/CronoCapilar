const { index } = require("./UsersController");

const connection = require('../database/connection');

module.exports = {
    async index(request,response){
        const users_id = request.headers.authorization;

        const product = await connection('products').where('users_id',users_id).select('*');
        
        return response.json(product);
    }
}