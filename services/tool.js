var UserModel = require("../models/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;


//create admin
var createadmin = ()=>{
    bcrypt.hash("admin", saltRounds).then((hash)=>{
        var tempdata = new UserModel({
            name : 'biswajit',
            password : hash,
            emailid : 'biswajit.bd94@gmail.com',
            contact : '7002427410',
            type: 'ADMIN',
        })
        tempdata.save().then(()=>{
            console.log("user created")
        }).catch((err)=>{
            console.log("err1",err);
        })
    }).catch((err)=>{
        console.log("err2",err)
    })
}



 var hashPassword = (password)=>{
    return (new Promise((resolve,reject)=>{
        bcrypt.hash(password, saltRounds).then(function(hash) {
            resolve(hash);
        }).catch((err)=>{
            reject(err);
        })
    }))
}

module.exports={ createadmin, hashPassword }