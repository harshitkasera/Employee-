const mongoose = require('mongoose')            // mongoose ek (Object data Modeling )liberary hai for mongoDB
const userSchema = new mongoose.Schema({        // user ka schema define kiya hai, ye hume user ki field define karega
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,   
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
const useModel = mongoose.model('user', userSchema) // ye line database mai "user" name show karaiyegi, or ye userschema ka rule follow karegi,
module.exports = useModel                           // ise hum userController mai export karege