const morgan = require('morgan')
const express = require('express')
const mongoose = require('mongoose')
const RegisterUser = require('../NodePractice/TestModel/registration_model')
const RatingModel = require('../NodePractice/TestModel/rating')

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

//Get Registred User

app.get('/registerUser', async (req, res) =>{
    try {
        let registredUser = await RegisterUser.find()
        res.send(registredUser)

    } catch (error) {
        res.send(error)
    }
})

//Get User By Id
app.get('/registerUser/:id', async (req, res) =>{

    try {

        let userId = req.params.id
        const user = await RegisterUser.findById(userId)
        console.log(user);
        if(!user){
            return res.status(404).send()
        }else{
            return res.send(user)
        }
       // res.send(user)
        
    } catch (error) {
        res.send(error)
    }
})

app.post('/rating',(req,res)=>{

    let ratingModel = new RatingModel({
       username : req.body.username,
       rating:req.body.rating
    })
    ratingModel.save()
    .then((response) =>{
        res.send(response)
    })

    .catch((err)=>{
        console.log(err);
    })
})


//Get Ratting Api

app.get('/rating',async (req, res)=>{
    try {
    let ratingData = await RatingModel.find()
    res.send(ratingData)

    } catch (error) {
        res.send(error)
      //  console.log(error);
    }

})


const PORT = 3000
app.listen(PORT, () => {
    console.log('Server Running');
})