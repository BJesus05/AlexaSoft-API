require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {MongoClient, ObjectId}= require("mongodb")
const {engine} = require('express-handlebars');

//Conexion
const port = 3000
const uri = "mongodb+srv://samuel:alexasoft@cluster0.dqbpzak.mongodb.net/"
const app = express()

//Rutas
const rutasCitas = require('./routes/citasRouter')
const rutasConfiguracion = require('./routes/configuracionRouter')
const rutasCompras = require('./routes/comprasRouter')
const rutasSalidaInsumos = require('./routes/salidaInsumosRouter')
const rutasVentas = require('./routes/ventasRouter')

//Uso Rutas
app.use("/", rutasCitas)
app.use("/", rutasCompras)
app.use("/", rutasConfiguracion)
app.use("/", rutasSalidaInsumos)
app.use("/", rutasVentas)

//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static("public"))
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')


app.get("/",(req,res) =>{
    res.status(200).render('home');
})

app.listen(3000, () => console.log("Servidor conectado"))

