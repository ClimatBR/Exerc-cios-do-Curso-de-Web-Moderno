const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParse = require('body-parser')

app.use(bodyParse.urlencoded({extended: true}))

app.get('/produtos', (req,res,next) => {
    res.send(bancoDeDados.getProdutos())//é um JSON
})

app.get('/produtos/:id', (req,res,next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})
app.post('/produtos', (req,res,next) => {
    const produto = bancoDeDados.salvarProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta,() => {
    console.log(`Servidor executando na porta ${porta}`)
})