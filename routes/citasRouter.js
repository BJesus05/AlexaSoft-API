const express = require("express")
const router =express.Router()
const citasController = require("../controllers/citasController")
router.get("/verCitas",  citasController.listarCitas)
module.exports = router