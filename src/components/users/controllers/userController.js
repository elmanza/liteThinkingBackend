const userService = require("../services/userService");

class User {
    async getAll(req, res, next){
        try {
            let response = await userService.getAll();
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async create(req, res, next){
        try {
            req.body.photo = `tmp/${req.files[0].fieldname}/${req.files[0].filename}`;
            let response = await userService.create(req.body);
            res.json(response);
        } catch (error) {
            next(error);
            console.log(error);
        }
    }
}

module.exports = new User();