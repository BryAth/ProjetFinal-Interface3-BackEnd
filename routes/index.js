const userRouter = require ("./user-router")
const testRouter = require ("./test-router")

const router = require("express").Router();

router.use("/user",userRouter)



module.exports = router;