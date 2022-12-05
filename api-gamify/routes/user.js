const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello from route user')
})

router.post('/', (req, res) => {
    res.send('Hello from route user')
})

router.put('/', (req, res) => {
    res.send('Hello from route user')
})

router.delete('/', (req, res) => {
    res.send('Hello from route user')
})

module.exports = router