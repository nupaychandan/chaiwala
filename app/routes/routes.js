module.exports = app => {
    const auth = require('../middlewares/jwt-auth');
    var router = require("express").Router();
    const cntl = require("../controllers/controller.js");
    //***************************************************
    //Common Used
    //***************************************************
    
    router.post("/register", cntl.register);
    
    router.post("/addCustomer", cntl.addCustomer);
    
    router.post("/login", cntl.login);
      
    //***************************************************

    app.use('/api', router);
    
    //***************************************************
    //***************************************************
    //***************************************************
};