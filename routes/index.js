const userRouter = require ("./user-router")
const geantRouter = require("./geants-routeur")
const eshopRouter = require ("./eshop-router")
const authRouter = require ("./auth-router")


const router = require("express").Router();

router.use("/user",userRouter)
router.use("/geants",geantRouter)
router.use("/eshop",eshopRouter)
router.use("/register",authRouter)


module.exports = router;