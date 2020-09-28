const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index (request, response){
        const users = await connection('users').select('*');
        return response.json(users)
    },
    
    async create(request, response){
        //const params = request.params; //:id
        //const query = request.query; | /?info
        const { name, email, cidade, uf, typeHair } = request.query; // utilizado com o post, trás um corpo Json para a app
        const id = crypto.randomBytes(4).toString('HEX'); //Gerar ID

        //Inserir no BD
        try{
            await connection('users').insert({
                id,
                name,
                email,
                cidade,
                uf,
                typeHair,
            }) 

        }catch (error) {
            response.json({
            error: true,
            message: error.message
            }); 
        }

        return response.json({ id });
    }

};