const connection = require('../database/connection');

module.exports = {
    async index (request, response){
        //Paginação (???)
        const [count] = await connection('products').count();//Total de produtos 
        const products = await connection('products').select('*');

        response.header('X-Total-Count', count['count(*)']);//Quantidade de produtos para o frontend
        return response.json(products)
    }, 

    async create (request,response){
        const {title, info} = request.query;
        const users_id = request.headers.authorization;
        try {
            await connection('products').insert({
                title,
                info,
                users_id,
            })
        } catch (error) {
            response.json({
                error: true,
                message: error.message
            });
        }
        return response.json({users_id });
    },

    async delete(request,response){
        const {id} = request.params;
        const users_id = request.headers.authorization;

        const product = await connection('products').where('id',id).select('users_id').first();
        if (product.users_id != users_id){
            return response.status(401).json({error:'Operation not permitted.'}); //http status code 401 "Não autorizado"
        }
        await connection('products').where('id',id).delete();
        return response.status(204).send(); //http status code 204 "Sucesso, mas sem conteudo de retorno"
    }
}