const express= require('express')
const userRouter =require('./routes/user.routes')       

const app= express();   
app.set('view engine','ejs');
app.use(express.json())  // built in middle ware for undefined in terminal for the data 
app.use(express.urlencoded({extended:true})) 

app.use('/user',userRouter)

app.listen(3001,()=>{
    console.log("server is running on port 3001 ");
})

