const { Router } = require("express");
const router = Router();
const userController = require("./controllers/userController");
const uploadFileMiddleware = require("./middlewares/uploadFileMiddleware")

module.exports = app =>{
    app.use("/user", router);
    
    router.get('/', userController.getAll);
    router.post('/', [uploadFileMiddleware.uploadFile()], userController.create);
}