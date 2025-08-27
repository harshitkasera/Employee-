const { default: mongoose } = require("mongoose");  // yaha hum mongoose ko require kar rhe hai,so that mongoDB mai data bana ske

const empModel = mongoose.Schema({  // ye ek schema bnata hai and ye define karta hai ki mongoDb mai kis trh ke structure m store hoga
    name : {
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
})

const emp = mongoose.model("employ",empModel) //ye line model create karti hai or emp model ka use krke mongoDB mai delete insert krskte h
module.exports = emp                          // ise humne empcontroller mai convert kiya hai   