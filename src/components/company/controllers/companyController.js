const companyService = require("../services/companyService");

class Company {
    async getAll(req, res, next){
        try {
            let response = await companyService.getAll();
            res.json(response);
        } catch (error) {
            next(error);
        }
    }

    async create(req, res, next){
        try {
            req.body.logo = `tmp/${req.files[0].fieldname}/${req.files[0].filename}`;
            let response = await companyService.create(req.body);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }

    async getOne(req, res, next){
        try {
            let response = await companyService.getOne(req.params.id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }

    async update(req, res, next){
        try {
            let response = await companyService.update(req.params.id, req.body);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next){
        try {
            let response = await companyService.delete(req.params.id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new Company();