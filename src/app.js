// Require express for the server application
var express = require('express')
var app = express()

// Get devMode variable
var devMode

for(let i = 0; i < process.argv.length; i++)
{
    if(process.argv[i].match('devMode'))
    {
        let str = process.argv[i]
        let slice = str.slice(str.indexOf('=') + 1)
        devMode = (slice === 'true')
    }
}

// Connect livereload
if(devMode)
    app.use(require('connect-livereload')());

// Template engine config
var hbs = require("express-handlebars").create(
{
    layoutsDir:`${__dirname}/layouts`,
    partialsDir:`${__dirname}/partials`,
    extname:"hbs"
});
app.engine("hbs", hbs.engine)
app.set("view engine","hbs")
app.set("views",`${__dirname}`)

// Redirect to /home on root
app.get('/', (req, res) =>
{
    res.status(308).redirect('/home')
})

// Require routers
var home = require('./home/router')
var partials = require('./partials/router')

// Use routers
// Setting '/home' as a route and assigning home router to deal with requests
app.use('/home', home)
app.use('/partials', partials)

// If no route is found send 404
app.use(function(req, res) {
    res.status(404).end('Page not found')
})

// Get Ipv4 address to host to LAN and a random port
var host = require('os').networkInterfaces().Ethernet[1].address
var port = '8080'

// Call listen function to activate the server
app.listen(port, host, () =>
{
    console.log(`Listening locally on http://${host}:${port}`)
})