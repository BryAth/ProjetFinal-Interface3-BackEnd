const userController = require("../controllers/user-controllers")

const userRouter = require('express').Router();

userRouter.route("/")
.get (userController.getAll)

.post(userController.create)


userRouter.route('/:id')
.put(userController.update)
.get(userController.getById)




// userRouter.get('/',(req,res) => {
//     res.send("Methode Get")
// })

// userRouter.put('/',(req,res) => {
//     res.send("Methode update")
// })

// userRouter.get('/:id',(req,res) => {
//     res.send("Methode Get By Id")
// })

// userRouter.delete("/:id",(req,res) => {
//     res.send("Methode Delete By Id ")
// })

// userRouter.post("/:id",(req,res) => {
//     res.send("Create User")
// })

module.exports = userRouter