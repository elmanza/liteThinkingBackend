let { User } = require("../../../models");
let Crypter  = require("../../../utils/crypter/crypterservice");
let JWT  = require("../../../utils/JWT/JWTservice");

class Users {
    async getAll(){
        try {
            return await User.findAll();
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            return await User.findByPk(id);
        } catch (error) {
            console.log(error);
        }
    }

    async create(obj){
        try {
            let { password }= obj;
            password = await Crypter.encryptPassword(password);
            delete obj.password;
            delete obj.userFiles;
            return await User.create({...obj, password});
        } catch (error) {
            throw new Error(error);
        }
    }

    async getUserByEmail(username){
        try {
            return await User.findOne({ where: { username: username.trim() } });
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new Users();