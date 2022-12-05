const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    email: String,
    username: String,
})

module.exports = mongoose.model('room', roomSchema, 'rooms')