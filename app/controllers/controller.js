const net = require('net');
const db = require("../models");
const sequelize = db.sequelize;


exports.register = async(req,res)=>{
    if(req.body.name == "" || req.body.name == null){
      res.send({status:false, result:"Name should not be blank."});  
    }
    if(req.body.emailId == "" || req.body.emailId == null){
      res.send({status:false, result:"emailId should not be blank."});  
    }
    if(req.body.password == "" || req.body.password == null){
      res.send({status:false, result:"Password should not be blank."});  
    }
    if(req.body.mobileno == "" || req.body.mobileno == null){
      res.send({status:false, result:"MobileNo should not be blank."});  
    }
    if(req.body.businessArea == "" || req.body.businessArea == null){
        res.send({status:false, result:"BusinessArea should not be blank."});  
    }
    console.log("reg data*******",req.body);
    const sqlQuery = 'sp_AddBusiness :Name, :EmailId, :Password, :MobileNo,:BusinessArea, :BusinessType, :UserId';
    const result = await sequelize.query(sqlQuery, { replacements: {Name: req.body.name, EmailId: req.body.emailId,
        Password:req.body.password, MobileNo:req.body.mobileno ,BusinessArea : req.body.businessArea , BusinessType :'V',UserId : 0}});
    console.log("result-sp_AddBusiness*****",result);
    res.send({status:true, result:result[0]});
  }

  exports.addCustomer = async(req,res)=>{
    if(req.body.name == "" || req.body.name == null){
      res.send({status:false, result:"Name should not be blank."});  
    }
    if(req.body.emailId == "" || req.body.emailId == null){
      res.send({status:false, result:"emailId should not be blank."});  
    }
    if(req.body.mobileno == "" || req.body.mobileno == null){
      res.send({status:false, result:"MobileNo should not be blank."});  
    }
    if(req.body.userId == 0){
        res.send({status:false, result:"userId must be greater than 0."});  
    }
    console.log("add customer data*******",req.body);
    const sqlQuery = 'sp_AddBusiness :Name, :EmailId, :Password, :MobileNo,:BusinessArea, :BusinessType, :UserId';
    const result = await sequelize.query(sqlQuery, { replacements: {Name: req.body.name, EmailId: req.body.emailId,
        Password:'', MobileNo:req.body.mobileno ,BusinessArea : '' , BusinessType :'C', UserId : req.body.userId }});
    console.log("result-sp_AddBusiness*****",result);
    res.send({status:true, result:result[0]});
  }

  exports.login = async(req,res)=>{
    if(req.body.emailId == "" || req.body.emailId == null){
        res.send({status:false, result:"emailId should not be blank."});  
    }
    if(req.body.password == "" || req.body.password == null){
    res.send({status:false, result:"Password should not be blank."});  
    }
    console.log("login data*******",req.body);
    const sqlQuery = 'sp_Login  :EmailId, :Password';
    const result = await sequelize.query(sqlQuery, { replacements: {EmailId: req.body.emailId,Password:req.body.password}});
    console.log("result-sp_Login*****",result);
    res.send({status:true, result:result[0]});
  }
  
  