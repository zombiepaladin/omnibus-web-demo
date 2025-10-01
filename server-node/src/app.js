const express = require('express')

const app = express()

const weatherForecast = require('./routers/weather-forecast')

app.use(weatherForecast)

module.exports = {start: function (port) {
 if(!port) port = 3000
 app.listen(port, () => console.log(`Listening on port ${port}`))
}}
