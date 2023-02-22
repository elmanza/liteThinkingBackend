const articleService = require("../services/articleService");

class Articles {
    async getArticlesByCompany(req, res, next){
        try {
            let response = await articleService.getArticlesByCompany(req.params.companyId);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async createArticle(req, res, next){
        try {
            let response = await articleService.createArticle(req.body);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

    async update(req, res, next){
        try {
            let response = await articleService.update(req.params.id, req.body);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }

    async delete(req, res, next){
        try {
            let response = await articleService.delete(req.params.id);
            res.json(response);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new Articles();