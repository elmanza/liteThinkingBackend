const { Router } = require("express");
const router = Router();
const articleController = require("./controllers/articleController");

module.exports = app =>{
    app.use("/article", router);
    
    router.get('/:companyId', articleController.getArticlesByCompany);
    router.post('/', articleController.createArticle);
    router.put('/:id', articleController.update);
    router.delete('/:id', articleController.delete);
}