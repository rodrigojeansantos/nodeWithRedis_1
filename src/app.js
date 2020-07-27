const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.json())
mongoose.connect('mongodb+srv://userTemp:userTemp@cluster0.gg549.mongodb.net/redis?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
app.use(bodyParser.urlencoded({extended: false}))

require('./routes')(app)

app.listen(3000, () =>{
    console.log('Live...')
})