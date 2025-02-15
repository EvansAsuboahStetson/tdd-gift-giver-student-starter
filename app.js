const express = require('express')
const {NotFoundError} = require("./utils/errors")
const app = express()
const gift = require("./routes/gift-exchange")
const morgan = require('morgan')
app.use(morgan('tiny'))
app.use(express.json())
app.use('/gift-exchange', gift)




app.get("/", async (req, res, next) => {
    res.status(200).json({ping:"pong"})
})
//handle all 404 errorors
app.use((req, res, next) => {
 return next(new NotFoundError())   
})

//Generic erroror handle

app.use((error, req, res, next) => {
   const status = error.status || 400
    const message = error.message
    return res.status(status).json({
        error: {message,status}
    })
})

module.exports = app