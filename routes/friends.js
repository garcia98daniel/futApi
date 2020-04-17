const express = require('express');

function usersApi(app){
    const router = express.Router();
    app.use("/api/friends", router);

    router.get("/", async function(req, res, next){
        try {
            const friends = await Promise.resolve(
                friendsMocks = [
                {
                    id: 1,
                    name: "Camilo",
                    position: "Del",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 3,
                    pieIzq:2,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                },
            
                {
                    id: 2,
                    name: "Jose",
                    position: "Md",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 4,
                    pieIzq:1,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
            
                {
                    id: 3,
                    name: "Daniel",
                    position: "Def",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 3,
                    pieIzq:2,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
                {
                    id: 4,
                    name: "Richart",
                    position: "Def",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 1,
                    pieIzq:2,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
                {
                    id: 5,
                    name: "Juan",
                    position: "Def",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 5,
                    pieIzq:0,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
                {
                    id: 6,
                    name: "Pedro",
                    position: "Por",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 3,
                    pieIzq:5,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
                {
                    id: 7,
                    name: "Julian",
                    position: "Por",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 3,
                    pieIzq:2,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
                {
                    id: 8,
                    name: "Robert",
                    position: "Del",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 2,
                    pieIzq:1,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
            
                {
                    id: 9,
                    name: "Piter",
                    position: "Def",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 4,
                    pieIzq:4,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
            
                {
                    id: 10,
                    name: "Martin",
                    position: "Md",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 3,
                    pieIzq:3,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
            
                {
                    id: 11,
                    name: "Wolf",
                    position: "Def",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 3,
                    pieIzq: 2,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
            
                {
                    id: 12,
                    name: "Andres",
                    position: "Md",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 5,
                    pieIzq: 1,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
            
                {
                    id: 13,
                    name: "Felipe",
                    position: "Def",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 4,
                    pieIzq: 3,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
            
                {
                    id: 14,
                    name: "Bart",
                    position: "Md",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 1,
                    pieIzq: 5,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
            
                {
                    id: 15,
                    name: "Will",
                    position: "Def",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 2,
                    pieIzq:2,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                },
            
                {
                    id: 16,
                    name: "Sergio",
                    position: "Por",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 2,
                    pieIzq:2,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
            
                }
                ]
            );
 
            res.status(200).json({
                data: friends,
                message:'friends listed'
            })
        } catch (error) {
            next(error);
        }
    });// devuelve la lista de los amigos agregados

    router.get("/:friendId", async function(req, res, next){
        try {
            const friendId = await Promise.resolve(
                friendsMocks = [
                {
                    id: 1,
                    name: "Camilo",
                    position: "Del",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 3,
                    pieIzq:2,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                },
                ]
            );
 
            res.status(200).json({
                data: friendId,
                message:'friend retrieved'
            })
        } catch (error) {
            next(error);
        }
    });// devuelve un amigo buscado para agregarlo

    router.post("/", async function(req, res, next){
        try {
            const sendFriendRequestId = await Promise.resolve(
                friendsMocks = [
                {
                    id: 1,
                    name: "Camilo",
                    position: "Del",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 3,
                    pieIzq:2,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                },
                ]
            );
 
            res.status(201).json({
                data: sendFriendRequestId,
                message:'invitation send'
            })
        } catch (error) {
            next(error);
        }
    });// devuelve un amigo al que le hemos enviado la solicitud de amistad

    router.delete("/:friendId", async function(req, res, next){
        try {
            const deletedFriendId = await Promise.resolve(
                friendsMocks = [
                {
                    id: 1,
                    name: "Camilo",
                    position: "Del",
                    added: false,
                    eFisico: "Bueno",
                    pieDer: 3,
                    pieIzq:2,
                    img: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                },
                ]
            );
 
            res.status(201).json({
                data: deletedFriendId,
                message:'deleted friend'
            })
        } catch (error) {
            next(error);
        }
    });// devuelve un amigo al que le hemos enviado la solicitud de amistad
}

module.exports = usersApi;