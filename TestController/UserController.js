const Registration = require('../TestModel/registration_model')
const LoginUser = require('../TestModel/login_user')
const { response } = require('express')


const registerUser = (req, res, next) => {
    Registration.find()
        .then(response => {
            res.json({
                response
            })
        })
        .catch(err => {
            res.json({
                message: err
            })
        })
}

const loginUser = (req,res,next)=>{
    LoginUser.find()
    .then(response=>{
        res.json({
            response
        })
    })
    .catch(err =>{
        res.json({
            message:err
        })
    })
}