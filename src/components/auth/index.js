const { Router } = require("express");
const router = Router();
const authController = require("./controllers/authController");

module.exports = app =>{
    app.use("/auth", router);
    
    router.post('/', authController.loginController);
    router.post('/verifytoken', authController.verifyTokenController);
}