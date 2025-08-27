const empController = require('../controller/empController')
const express = require('express')
const router = express.Router() // express ko import karke router object bnaya gya h

router.post('/save',empController.addEmp)
router.get('/view',empController.viewAllEmp)
router.put('/update/:id',empController.updateEmp)
router.delete('/delete/:id',empController.deletEmp)

module.exports = router

