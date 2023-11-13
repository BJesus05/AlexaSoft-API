//require('dotenv').config()
//console.log(process.env)

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {engine} = require('express-handlebars');
const routerApi = require('./routes')


var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())


app.set('views',path.join(_dirname,'views'));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')

router.get('/api/ejemplo',(req,res) =>{
    res.status(200).render('home');
})

