let JWT  = require("../../../utils/JWT/JWTservice");
let userService = require("../../users/services/userService");
let Crypter  = require("../../../utils/crypter/crypterservice");
const { config } = require("../../../config");
const boom = require('@hapi/boom');

class Auth {
    async login(username, password){
        try {
            let existUser = await userService.getUserByEmail(username);
            if(!existUser) throw boom.notFound('Email or password is incorrect');
            const success = await Crypter.comparePasswords(password, existUser.password)
            if(!success) throw boom.notFound('Email or password is incorrect');
            const token = await JWT.generate({id: existUser.id});
            let response = {
                user:existUser,
                token,
                type: 'Bearer',
                expires_in: config.expireTimeToken
            }
            return response;
        } catch (error) {
            throw error;
        }
    }

    async verifyToken(token){
        try {
            let verication = await JWT.verify(token);
            if(!verication) throw new Error("Token invalid");
            const payload = await  JWT.decode(token);
            const user = await userService.get(payload.id);
            if(!user) throw new Error("Este token no le pertenece a ningun usuario");
            return user;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = new Auth();