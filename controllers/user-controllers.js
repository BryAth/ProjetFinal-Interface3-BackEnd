const User = require ('../models/user-models')

const userMapper= user => new UserDTO(user.id,user.pseudo,user.firstname,user.lastname,user.email);



const userController = {


    getAll:async(req,res) => {
        const users = await User.find()
        res.status(200).json(users)
    },




    getById : async(req,res) => {
        const id = req.params.id
        const user = await User.findById(id);

        if(!user) {
            res.status(404).json('User non trouvé ! ')
        }
        res.status(200).json(user)
    },



    create : async (req,res) => {
        const userToAdd = User(req.body);
        await userToAdd.save()

        if(!userToAdd){
            res.status(404).json('Modèle non respecté')
        }
        res.status(200).json(userToAdd)
    },



    update : async(req,res) => {
        const id = req.params.id;

        const {pseudo,firstname,lastname,email} = req.body

        const userUpdated = await User.findByIdAndUpdate(id,{pseudo,firstname,lastname,email},{returnDocument:'after'})

        res.status(200).json(userUpdated)
    },
    delete : async (req,res) => {
        const id = req.params.id;
        const userToDelete = await User.findByIdAndDelete(id);
        if(!userToDelete) {
            res.sendStatus(404).json('ID non conforme ')
        }
        res.sendStatus(200).json('User bel et bien delete')
    }
}

module.exports = userController

