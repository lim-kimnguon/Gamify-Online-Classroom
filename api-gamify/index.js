const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 3000 || process.env.PORT
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const userRoute = require('./routes/user')
const roomRoute = require('./routes/room')
const questionRoute = require('./routes/question')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello From server')
})

app.use('/user', userRoute)
app.use('/room', roomRoute)
app.use('/question', questionRoute)

mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB!');
})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})