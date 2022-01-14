const porta = 3003

const express = require('express')
const app = express()
const bodyparse = require('body-parser')
const BancoDeDados = require('./BancoDeDados')

app.use(bodyparse.urlencoded({ extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(BancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(BancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = BancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = BancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = BancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)
})

app.listen(porta, () => {
    console.log(`Servidor funcionand na porta ${porta}`)
})
