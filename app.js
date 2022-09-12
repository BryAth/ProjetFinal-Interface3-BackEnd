const express = require("express") // Initialisation d'express

const app = express();

const router = require("./routes") //L'app utilisera ce chemin afin d'exploiter les routes


app.use(express.json())


// app.use("/",(req,res) =>{
//     res.send("Salut")
// }) // Main page qui utilisera les routes 


app.use("/api",router)

const port = 8080 // Variable qui stocke le port.

app.listen(port,()=>{
    console.log('App listening on port ' + port)
}) 