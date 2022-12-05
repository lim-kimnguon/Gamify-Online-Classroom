const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    role: {
        type: String,
        default: 'guest'
    }  
})

module.exports = mongoose.model('user', userSchema, 'users')