const {Schema,model} = require ("mongoose");


const UserSchema =  new Schema ({

    pseudo : { 
    type : String,
    required : true,
    unique : true,
    trim : true
},

    firstname : {
        type : String,
        required : true,
        trim : true
    },

    lastname : {
        type : String,
        required : true,
        trim : true

    },
    password :{
        type : String,
        required : true,
        trim : true
    },

    email : {
        type : String,
        required : true,
        trim : true
    },
    role : {
        type : String,
        required : true,
        enum : ["User" , "Admin"],
        trim : true,
        default : "User"
    }
},{
    collection : 'User',
    timestamps : true
});

const User = model('User',UserSchema)

module.exports =User ; 