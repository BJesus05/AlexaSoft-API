const {MongoClient, ObjectId}= require("mongodb")
const uri = "mongodb+srv://samuel:alexasoft@cluster0.dqbpzak.mongodb.net/"
const response = require("../network/response")

var controlador = {}
controlador.listarCitas= async (req, res)=>{
    res.render("home")
}

module.exports = controlador