const Geant = require ("../models/geant-model")



const GeantController = {

    getAll : async(req,res) => {
        const geants = await Geant.find()
        res.status(200).json(geants)
    },

    getById : async(req,res) => {
        const id = req.params.id

        const geants = await Geant.findById(id)
        res.status(200).json(geants)
    },
    create : async (req,res) => {
        console.log("salut");
        const geantToAdd = Geant(req.body);
        
        await geantToAdd.save()
        if(!geantToAdd){
            res.status(404).json("Modèle non respecté")
        }

        res.status(200).json(geantToAdd)
    },

    update : async(req,res) => {
        const id = req.params.id;

        const {nom,anneeCreation,poids,taille,img} = req.body

        const geantUpdated = await Geant.findByIdAndUpdate(id,{
            nom , anneeCreation,poids,taille, img
        },{returnDocument :'after'})

        res.status(200).json(geantUpdated)
    },

    delete : async(req,res) => {
        const id = req.params.id
    
        const geantToDelete = await Geant.findOneAndDelete(id);

        if(!geantToDelete){
            res.status(404)
        }
        res.status(200).json(`Géant bien supprimé`)
    }
}

module.exports = GeantController