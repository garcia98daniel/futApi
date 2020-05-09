const joi = require('@hapi/joi'); //Esta libreria nos permite definir el esquema que va hacer usado

// const {matchIdSchema} = require('./matches');
const {userIdSchema} = require('./users');

const userMatchIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserMatchSchema = {
    userId: userIdSchema,
//     matchId: matchIdSchema,
}

module.exports = {
    userMatchIdSchema,
    // createUserMatchSchema
}