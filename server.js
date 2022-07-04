const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const RegisterUser = require('../NodePractice/TestModel/registration_model')

mongoose.connect('mongodb://localhost:27017/admin', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Database Connected'))
.catch((err)=> console.log(err))

const app = express()
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))

app.post('/registerUser',(req,res) =>{ console.log(req.body);
    let regiseterUser = new RegisterUser({
        userEmail:req.body.userEmail,
        userPasswrod:req.body.userPasswrod,
        userFullname:req.body.userFullname
    })
    regiseterUser.save()
    .then((response)=>{
        res.send('Data Added Successful')
    })
    .catch((err)=>{
        console.log(err)
    })
})


const PORT = 3000
app.listen(PORT, () => {
    console.log('Server Running');
})