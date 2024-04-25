const express = require('express')
const path = require('path') // figures out where things are

const indexRouter = require('./routes/index.js')

const app = express() // creates web app server

// tell app where the views(HTML files or templates)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs') // use handlebars to generate views

app.use('/', indexRouter) // all requests to the app will be sent to indexRouter

// start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})