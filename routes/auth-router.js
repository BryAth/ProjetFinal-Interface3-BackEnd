const authController = require ("../controllers/authController")
const bodyValidator = require ("../middlewares/bodyValidator")


const registerValidator = require ("../validators/auth-validator")


const authRouter = require("express").Router();

authRouter.route('/login')
    .post(bodyValidator(registerValidator),authController.login)


module.exports = authRouter