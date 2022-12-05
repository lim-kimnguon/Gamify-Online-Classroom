const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    email: String,
    username: String,
})

module.exports = mongoose.model('question', questionSchema, 'questions')