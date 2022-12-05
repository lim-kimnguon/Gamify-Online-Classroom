const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello from route room')
})

router.post('/', (req, res) => {
    res.send('Hello from route room')
})

router.put('/', (req, res) => {
    res.send('Hello from route room')
})

router.delete('/', (req, res) => {
    res.send('Hello from route room')
})

module.exports = router