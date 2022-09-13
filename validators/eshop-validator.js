const yup = require("yup")




const EshopValidator = yup.object({
    nomarticle : yup.string().min(2).max(25).required().trim(),
    prixArticle : yup.number().positive().required(), //! Le prix doit être positif.
    descriptionArticle : yup.string().min(1).max(250).required().trim(),
    img : yup.string().required()
})

module.exports = EshopValidator