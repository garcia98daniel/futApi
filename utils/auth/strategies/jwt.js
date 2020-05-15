const passport = require ('passport');
const { Strategy, ExtractJwt  } = require('passport-jwt');
const boom = require('@hapi/boom');

const UsersService = require('../../../services/users');
const { config } = require('../../../config');

//firmando el token
passport.use(
    new Strategy({
        secretOrKey: config.authJwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    
    async function(tokenPayload, cb){
        const usersService = new UsersService();

        try {
            const user = await usersService.getUser({ email: tokenPayload.email});

            if(!user){//si no existe el usuario
                return cb(boom.unauthorized(), false);//devolvemos un no autoriado
            }

            delete user.password;// borramos la contraseña en el objeto del usuario por seguridad

            //devolvemos el usuario mas el atributo con sus permisos (scopes)
            cb(null, {...user, scopes: tokenPayload.scopes});

        }catch(error){
            return cb(error);
        }
    })
)