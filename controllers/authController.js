const User = require ("../models/user-models")


const identificationController = {
    login : async(req,res) => {
        const {credential,password} = req.body;

        const credentialFilter =
        {
            $or : 
            [{email:credential},
            {pseudo:credential}
            ]
        }

        const user = await User.findOne(credentialFilter);

        if(!user){
            res.status(404).json("Mauvaise données de Login!")
        }
        res.status(200).json(user);
    }
}

module.exports = identificationController;