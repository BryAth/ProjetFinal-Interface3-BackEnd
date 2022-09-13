const {Schema,model} = require ("mongoose")

const eshopSchema = new Schema ({

    nomarticle : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    prixArticle : {
        type : Number,
        required : true,
        
    },
    descriptionArticle : {
        type : String,
        required : true,
        trim : true
    },
    img : {
        type : String,
        required : true,
        trim : true
    },
},{
    collection : "eshop",
    timestamps : true
});

const Eshop = model('eshop',eshopSchema)

module.exports = Eshop ;
