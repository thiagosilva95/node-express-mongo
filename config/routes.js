const express = require('express')

module.exports = function(server) {
    const router = express.Router()
    server.use('/api', router)

    const itemService = this.require('../api/itens/itemService')
    itemService.register(router, '/item')
}