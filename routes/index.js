const userRouter = require ("./user-router")
const geantRouter = require("./geants-routeur")


const router = require("express").Router();

router.use("/user",userRouter)
router.use("/geants",geantRouter)



module.exports = router;