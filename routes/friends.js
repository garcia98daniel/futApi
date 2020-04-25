const express = require('express');
const FriendsService = require('../services/friends');

function friendsApi(app){
    const router = express.Router();
    app.use("/api/friends", router);

    const friendsService = new FriendsService();

    router.get("/", async function(req, res, next){
        const { tags } = req.query;
        try {
            const friends = await friendsService.getFriends({ tags });
 
            res.status(200).json({
                data: friends,
                message:'friends listed'
            })
        } catch (error) {
            next(error);
        }
    });// devuelve la lista de los amigos agregados

    router.get("/:friendId", async function(req, res, next){
        const { friendId } = req.param;
        try {
            const friends = await friendsService.getFriend({ friendId });
 
            res.status(200).json({
                data: friends,
                message:'friend retrieved'
            })
        } catch (error) {
            next(error);
        }
    });// devuelve un amigo buscado para agregarlo

    router.post("/", async function(req, res, next){
        const { body: friend } = req;
        try {
            const sendFriendRequestId = await friendsService.sentFriendRequest({ friend });
 
            res.status(201).json({
                data: sendFriendRequestId,
                message:'invitation send'
            })
        } catch (error) {
            next(error);
        }
    });// devuelve un amigo al que le hemos enviado la solicitud de amistad

    router.delete("/:friendId", async function(req, res, next){
        const { friendId } = req.param;

        try {
            const deletedFriendId = await friendsService.deletedFriend({ friendId });
 
            res.status(200).json({
                data: deletedFriendId,
                message:'deleted friend'
            })
        } catch (error) {
            next(error);
        }
    });// devuelve un amigo al que le hemos enviado la solicitud de amistad
}

module.exports = friendsApi;