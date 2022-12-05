const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello from route question')
})

router.post('/', (req, res) => {
    res.send('Hello from route question')
})

router.put('/', (req, res) => {
    res.send('Hello from route question')
})

router.delete('/', (req, res) => {
    res.send('Hello from route question')
})

module.exports = router