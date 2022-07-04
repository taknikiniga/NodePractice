const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loginUser = Schema({

    email:{
        type : String
    },
    passwrod:{
        type:String
    }
},{timestamps:true})

const RegLoginUser = mongoose.model('login_user',loginUser)
module.exports = RegLoginUser