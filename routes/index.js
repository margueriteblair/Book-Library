//creating all the routes here for the INDEX of our application

const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index')
})
//res.render() function compiles your template
//res.render() renders a view and sends the html string to the client

module.exports = router;