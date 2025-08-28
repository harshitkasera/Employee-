const express = require('express')     // express ko islisye import krte hai kyuki ye code ko short krta hai
const cors = require('cors')           // CORS allow karta hai frontend (jaise React) aur backend ke beech data exchange
require("./database/connection.js");   // Is file me tumne mongoose.connect(...)

const app = express();                 // app ek express application bn gya jisme hum routes define karege
const use = express()
app.use(cors());                       // CORS allow karta hai cross-origin requests (frontend/backend alag ports pe hon to bhi kaam kare)
app.use(express.json())                // jb hum post req bhejte hai with json body, to ye us body ko req body m available kara deta hai

const port = 2353;                     // is port pr humara sever run karega

app.get('/',(req,res)=>{
    res.send("Server in running")
})                                     // jab koi browser (root URl) pr get request krega tbh server (server is run) response karega

app.use('/api/user', require('./routes/userRoutes.js'))  //  jo bhi userRoutes mai defined hai,  wo sab /api/user se start honge.
app.use('/api/emp',require('./routes/empRoutes.js'))   //  jo bhi userRoutes mai defined hai,  wo sab /api/emp se start honge.

app.listen(port,()=>{
    console.log("server start")
})                                     // ye server ko start krega 


