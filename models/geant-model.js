const {Schema,model} = require ("mongoose");



const geantSchema = new Schema ({
    

    nom : {
        type : String , 
        require : true,
        unique : true,
        trim : true,

    },

    anneeCreation : {
        type : Number,
        require : true,
        trim : true
    },

    poids : {
        type : String,
        require : true,
        trim : true

    },
    taille : {
        type : String,
        require : true,
        trim : true
    },
    description : {
        type : String,
        require : true,
        trim : true
    },
    img : {
        type : String
    },
    
},{
    collection : 'Geants',
    timestamps : true
})

const Geant = model('Geants',geantSchema)

module.exports = Geant ; 