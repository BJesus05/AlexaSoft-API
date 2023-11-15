require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path');
const {engine} = require('express-handlebars');

//Conexion
const port =3000;
const app = express()

//Rutas
const rutasCitas = require('./routes/citasRouter')


//Uso Rutas
app.use("/", rutasCitas)


//middleware
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use(express.static("public"))
app.set('views',path.join(__dirname,'views'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')


app.get("/",(req,res) =>{
    res.status(200).render('home');
})

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Ocurrio un error!');
  });

app.listen(3000, () => console.log("Servidor conectado"))

