const port = 4000

// body-parser faz a interpretação do corpo(BODY) da requisição
const bodyParser = require('body-parser')
// express é o nosso framework web
const express = require('express')
// atribuimos nossa variável “server” a uma instância do express()
const server = express()

// Adicionando ao nosso servidor dois middlewares: 
// todas as requisições que chegarem em nosso servidor 
// irão passar em sequência pelos middlewares “bodyParser.urlencoded” 
// que faz o parse das requisições via formulário e “bodyParser.json” 
// das requisições via json.
server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

server.listen(process.env.PORT || port, function () {
    console.log('Listening on')
})

module.exports = server