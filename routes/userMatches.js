const express = require('express');
const UsersMatchesService = require('../services/userMatches');
// const validationHandler = require('../utils/middleware/validationHandler');
//los routes solo se encargan de redireccionar y pasarle la data a los services para que ellos hagan sus operaciones y la devuelvan
//los routes no llevan logica

//protegiendo las rutas con jwt
const passport = require('passport');
require('../utils/auth/strategies/jwt');

// const { friendIdSchema } = require('../utils/schemas/friendSchema');
const { userIdSchema } = require('../utils/schemas/users');
const { createUserMatchSchema } = require('../utils/schemas/userMatches')

function userMatchesApi(app){
    const router = express.Router();
    app.use('/api/user-matches', router);

    const userMatchesService = new UsersMatchesService();

    router.get('/',passport.authenticate(/*estrategia*/'jwt',{session:false}), async function(req, res, next){
        const { userId } = req.query

        try{
            const userMatches = await userMatchesService.getUserMatches({ userId });
            
            res.status(200).json({
                data: userMatches,
                messege: "user matches listed"
            })
        }catch (error){
            next(error);
        }
    });// devuelve la lista de partidos del usuario

    router.get('/:friendId', async function(req, res, next){
        
    });// devuelve la info de un partido 

    router.post('/',passport.authenticate(/*estrategia*/'jwt',{session:false}), async function(req, res, next){
        const { body: userMatch } = req;

        try{
            const createdUserMatchId = await userMatchesService.createUserMatch({ userMatch });
            
            res.status(201).json({
                data: createdUserMatchId,
                messege: "user match created"
            })
        }catch (error){
            next(error);
        }
 
    });// devuelve un el id del partido que acabamos de crear

    router.delete('/:userMatchId',passport.authenticate(/*estrategia*/'jwt',{session:false}), async function(req, res, next){
        const { userMatchId } = req.params;

        try{
            const deletedUserMatchId = await userMatchesService.deleteUserMatch({ userMatchId });
            
            res.status(200).json({
                data: deletedUserMatchId,
                messege: "user match deleted"
            })
        }catch (error){
            next(error);
        }
    });// devuelve un id del partido eliminado

    router.put('/:matchId',passport.authenticate(/*estrategia*/'jwt',{session:false}), async function(req, res, next){
       
    });// devuelve a un id del partido modificado
}

module.exports = userMatchesApi;