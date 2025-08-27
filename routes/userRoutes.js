const useController = require('../controller/useController')  // ye line humari saveUser and loginUser ko import kar rha hai
const express = require('express')            

const Router = express.Router();         // express.Router()ka use hum modular Routes bnane ke liye use karte hai

Router.post('/saveUser', useController.saveUser)   // jb Client post /saveUser route pr request krega , to saveUser function call hoga,
Router.post('/loginUser', useController.loginUser)  // jb Client post /loginUser route pr request krega , to loginUser function call hoga,

module.exports = Router          // ise hum App.js mai export karege