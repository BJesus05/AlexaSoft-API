const express = require("express")
const router = express.Router()
const { MongoClient, ObjectId } = require("mongodb")
const uri = "mongodb+srv://samuel:alexasoft@cluster0.dqbpzak.mongodb.net/"
const response = require("../network/response")

//Funciones Validacion
const hexadecimal24 = (id) => /^[0-9a-fA-F]{24}$/.test(id);

router.get("/:id", async (req, res) => {
    const id = req.params.id
    if (hexadecimal24(id)) {
        const cliente = new MongoClient(uri)
        try {
            await cliente.connect()
            const cita = await cliente.db("ALEXASOFT").collection("citas").findOne({ _id: new ObjectId(id) })
            if (cita) {
                response.success(req, res, "¡Cita encontrada!", 201, cita)
            } else {
                response.error(req, res, "No se encontro ninguna cita", 404)
            }
        } catch (error) {
            console.log(error)
        } finally {
            await cliente.close()
        }
    } else {
        console.log("El id proporcionado no es valido")
    }
})
module.exports = router