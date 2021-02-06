const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const buscaCep = require('./src/functions/buscaCep')
const pesquisaClima = require('./src/functions/buscaClima')

app.set('view engine', 'EJS')
app.set('views', './src/views')

//necessario usar body-parser quando trabalha com EJS
app.use(bodyParser.urlencoded({extend:true}))
app.use(bodyParser.json())

app.get("/", (req,res) =>{
    res.render("index")
})

app.post('/envia-cep', async (req, res) => {
    const { cep } = req.body
    const resultado = await buscaCep(cep)

    res.render('resultado', {dado: resultado})
    
})

app.post('/pesquisa-clima', async (req, res) => {
    const { city } = req.body
    const resultado_clima = await pesquisaClima(city)
    
    res.render('clima', {dado: resultado_clima})
    
})

app.listen(3500)