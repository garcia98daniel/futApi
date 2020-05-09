const joi = require('@hapi/joi'); //Esta libreria nos permite definir el esquema que va hacer usado en la coleccion de usuarios

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const createUserSchema = {
    name: joi.string().max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    isAdmin: joi.boolean()
}

module.exports = {
    userIdSchema,
    createUserSchema
}