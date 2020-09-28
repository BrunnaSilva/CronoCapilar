const connection = require('../database/connection');

module.exports = {
    async index (request, response){

    }, 

    async create (request,response){
        const {id} = request.query;

        const user = await connection('users').where('id',id).select('name').first();
        if (!user){
            return response.status(400).json({error: 'No Users found with this ID'});
        }
        return response.json(user);
    }

}