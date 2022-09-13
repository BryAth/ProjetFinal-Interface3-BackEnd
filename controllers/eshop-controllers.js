const Eshop = require("../models/eshop-model")

const eshopController = {
    getAll : async(req,res) => {
        const article = await Eshop.find()

        
        res.status(200).json(article)
    },
    getByID : async(req,res) => {
        const id = req.params.id
        const  article = await Eshop.findById(id)
        
        res.status(200).json(article)
    },
    create : async (req,res) => {
        const articleToAdd = Eshop(req.body);
        await articleToAdd.save()

        if(!articleToAdd){
            res.status(404).json("Modèle non respecté")
        }
        res.status(200).json(articleToAdd)
    },
        update : async (req,res) => {
            const id = req.params.id
            const {nomarticle,prixArticle,descriptionArticle,img} = req.body

            const articleUpdated =  await Eshop.findByIdAndUpdate(id,{nomarticle,prixArticle,descriptionArticle,img},{returnDocument : 'after'})

            res.status(200).json(articleUpdated)
        },
        delete : async(req,res) => {
            const id = req.params.id
            const articleToDelete = await Eshop.findByIdAndDelete(id)
            if(!articleToDelete){
                res.sendStatus(404).json("ID non conforme")
            }
            res.sendStatus(200).json('Article bel et bien delete')
        }
}

module.exports = eshopController