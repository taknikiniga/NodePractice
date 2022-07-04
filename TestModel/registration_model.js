const mongoose = require('mongoose')
const Schema = new mongoose.Schema

const registration =new mongoose.Schema({
    userFullname: {
        type: String
    },
    userEmail: {
        type: String
    },
    userPasswrod: {
        type: String
    }

},{timestamps:true})

module.exports = mongoose.model('Registration',registration)
// module.exports = Employee