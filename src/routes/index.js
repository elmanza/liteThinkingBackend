let authApi = require("../components/auth");
let userApi = require("../components/users");
let companyApi = require("../components/company");
let articleApi = require("../components/article");

module.exports = app =>{
    authApi(app);
    userApi(app);
    companyApi(app);
    articleApi(app);

    app.get("/", (req, res)=> res.send("Todo ok!!!"));
}