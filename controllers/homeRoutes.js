const router = require('express').Router();
const { User, Discussion } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req,res) => {
    res.render("homepage")
    //every page we want has handlebars, it must be xyz.handlebars then 
    //res.render("xyz")
})

//right in this file (anything that is not an api route) would go right in this file
//anything in the api folder goes throughh the api routes. 
//individual movie could go here

//anything that COULD be a webpage - serve it up with a router.get
//decide what that path would be 
//what does someone have to put in the browser in order to see xyz
// router.get('/')


module.exports = router;
