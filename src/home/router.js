// Require express to get the Router
var router = require('express').Router()
var functions = require('../functions')

// Send message on root/route
// In this case route = '/home', as it was set in app.js
router.get('/', (req, res) =>
{
    // Without template

    // With template
    res.status(200).render(`${__dirname}/index`, {layout: 'main'})
    
})

// Send css file on root/route/index.css request
router.get('/index.css', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/index.css`)
})

// Send logo.png on request
router.get('/res/logo.png', (req, res) =>
{
    functions.sendFile(res, `${__dirname}/res/logo.png`)
})

// Export the router
module.exports = router