const express=  require('express');
const router  = express.Router();
const { body,validationResult } = require('express-validator');  // for validation (install package     )
const userModel = require('../models/user.model');

router.get('/register',(req,res)=>{
    res.render('register');
})//base

router.post('/register',
    body('email').trim().isEmail().isLength({min:10}),
    body('password').trim().isLength( {min :5}),
    body('username').trim().isLength({min:3}),
    async (req,res)=>{
        
    const errors= validationResult(req);   // exp package for validatiion
    if(!errors.isEmpty()) {
       return  res.status(400).json({
        errors:errors.array(),  
        message:'Invalid data' 
       })
    }
    

    const { email, username,password}= req.body;
    console.log(username);     
    const newUser=  await userModel.create({  // jo bhi user create hoga data ye variable me milega     
        email,
        username,
        password 
    })

    res.json(newUser)// sending in json format  
    
})


module.exports = router;    