const express = require('express')
const app = express()
const gift = require("./routes/gift-exchange")
const morgan = require('morgan')
app.use(morgan('tiny'))
app.use(express.json())
app.use('/gift-exchange', gift)



app.get("/", async (req, res, next) => {
    res.status(200).json({ping:"pong"})
})

module.exports = app