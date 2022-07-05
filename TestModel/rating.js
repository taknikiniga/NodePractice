const  mongoose = require('mongoose')
const Schema = new mongoose.Schema

const rating = mongoose.Schema({
    username:{
        type:String
    },
    rating:{
        type:Number
    }
},{timestamps:true})

module.exports = mongoose.model('Rating',rating)