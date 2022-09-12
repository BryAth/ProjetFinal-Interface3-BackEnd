

const userRouter = require('express').Router();

userRouter.route("/")
.get ( (req,res) => {
    res.sendStatus(200).json("Test")
})
// userRouter.get('/',(req,res) => {
//     res.send("Salut")
// })


module.exports = userRouter