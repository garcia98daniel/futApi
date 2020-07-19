const express = require('express');
const MatchesService = require('../services/userMatches');
// const validationHandler = require('../utils/middleware/validationHandler');
//los routes solo se encargan de redireccionar y pasarle la data a los services para que ellos hagan sus operaciones y la devuelvan
//los routes no llevan logica

//protegiendo las rutas con jwt
const passport = require('passport');
require('../utils/auth/strategies/jwt');

// const { friendIdSchema } = require('../utils/schemas/friendSchema');
// const { userIdSchema } = require('../utils/schemas/matches');
// const { createUserMatchSchema } = require('../utils/schemas/Matches');

function userMatchesApi(app){
    const router = express.Router();
    app.use('/api/user-matches', router);

    const userMatchesService = new UsersMatchesService();

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