const yup = require ("yup")

const pwdRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/   

//! const PWDREGEX = Le mot de passe doit contenir :
                    //! 1 chiffre
                    //! Une lettre UPERCASE.
                    //! Une lettre LOWERCASE.
                    //! Doit contenir un caractère spécial
                    //! Contenir entre 8 & 16 caractères


const emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/

//! const EMAILREGEX = L'email ne peut : 
                    //! -Commencer ou terminer par un DOT.
                    //! -Contenir un espace
                    //! -Contenir un caractère spécial.
                    //! -L'addrese ne peut pas contenir de DOT avant @
                    


const UserValidator = yup.object({
    pseudo : yup.string().min(3).max(25).trim().required(),
    firstname : yup.string().trim().required(),
    lastname : yup.string().trim().required(),
    password : yup.string().matches(pwdRegex).required(),
    email : yup.string().matches(emailRegex)
    
    

})


module.exports = UserValidator

