

const yup = require ("yup")

const pwdRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/   

const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

const registerValidator = yup.object({

    pseudo : yup.string().min(3).max(25).trim(),
    firstname : yup.string().min(1).max(255).trim(),
    lastname : yup.string().min(1).max(255).trim(),
    password : yup.string().matches(pwdRegex).required(),
    email : yup.string().matches(emailRegex).required()


})


module.exports = registerValidator