require("dotenv-flow").config()

const express = require("express") // Initialisation d'express

const app = express();

const {DB_CONNECTION,port} = process.env


const mongoose = require ('mongoose')

app.use(async(req,res,next) => {
    await mongoose.connect(DB_CONNECTION)
    
    console.log('Connection réussie ! ')
    next();
})



const router = require("./routes") //L'app utilisera ce chemin afin d'exploiter les routes


app.use(express.json())




app.use("/api",router)



app.listen(port,()=>{
    console.log('App listening on port ' + port)
}) 