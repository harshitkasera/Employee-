const mongoose = require('mongoose')     //ye ek(Object Data Modeling)library hai, isme schema defined krte h, or mongodb se easily intract karte hai

const DB = 'mongodb://harshitkasera201:353@ac-n83ex1s-shard-00-00.65oa1gn.mongodb.net:27017,ac-n83ex1s-shard-00-01.65oa1gn.mongodb.net:27017,ac-n83ex1s-shard-00-02.65oa1gn.mongodb.net:27017/?ssl=true&replicaSet=atlas-14emxg-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(DB)  //jo db name ka vairable liya hai use hum connect krte hai with link
    .then(() => { console.log("MongoDB connect Successfully") }) //yes
    .catch((err) => { console.log(err) })  // or not
