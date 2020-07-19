const express = require('express');
const UsersService = require('../services/users');
// const validationHandler = require('../utils/middleware/validationHandler');
//los routes solo se encargan de redireccionar y pasarle la data a los services para que ellos hagan sus operaciones y la devuelvan
//los routes no llevan logica

//protegiendo las rutas con jwt
const passport = require('passport');
require('../utils/auth/strategies/jwt');

// const { friendIdSchema } = require('../utils/schemas/friendSchema');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMatchSchema } = require('../utils/schemas/userMatches')

function usersApi(app){
    const router = express.Router();
    app.use('/api/users', router);

    const usersService = new UsersService();

    // router.get('/',passport.authenticate(/*estrategia*/'jwt',{session:false}), async function(req, res, next){
        
    // });
    
    router.put('/:userId',/*passport.authenticate('jwt',{session:false}),*/ async function(req, res, next){
        const { userId } = req.params;
        const { body: user} = req;
        try {
            const updatedUserId = await usersService.updateUser({ userId, user });
            res.status(200).json({
                data: updatedUserId,
                message:'user updated'
            })
        } catch (error) {
            next(error);
        }
    });// devuelve a un id del usuario modificado
}

module.exports = usersApi;