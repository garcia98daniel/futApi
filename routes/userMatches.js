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

    router.get('/',/*passport.authenticate(estrategia'jwt',{session:false}),*/ async function(req, res, next){
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
    });// devuelve la lista de los partidos confirmados donde esta el usuario

    router.get('/:userMatchId', async function(req, res, next){
        const { userMatchId } = req.params;
        try {
            const userMatch = await userMatchesService.getUserMatche({ userMatchId });
 
            res.status(200).json({
                data: userMatch,
                message:'match retrieved'
            })
        } catch (error) {
            next(error);
        }
    });// devuelve la info de un partido confirmado del usuario

    router.post('/',/*passport.authenticate('jwt',{session:false}),*/ async function(req, res, next){
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
 
    });// devuelve un el id del partido que acabamos de confirmar

    router.delete('/:userMatchId',/*passport.authenticate('jwt',{session:false}),*/ async function(req, res, next){
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
    });// devuelve un id del partido confirmado que eliminamos

}

module.exports = userMatchesApi;