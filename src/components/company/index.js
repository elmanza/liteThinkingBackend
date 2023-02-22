const { Router } = require("express");
const router = Router();
const companyController = require("./controllers/companyController");
const uploadFileMiddleware = require("./middlewares/uploadFileMiddleware")
const {
    parseQueryParamsToObject,
    parseBodyParamsToObject
  } = require('../../utils/middlewares/parseParamsToObject');
module.exports = app =>{
    app.use("/company", router);
    
    router.post('/', [uploadFileMiddleware.uploadFile()], companyController.create);
    router.get('/', companyController.getAll);
    router.get('/:id', companyController.getOne);
    router.put('/:id', [uploadFileMiddleware.uploadFile()], companyController.update);
    router.delete('/:id', companyController.delete);

}