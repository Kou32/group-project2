const router = require('express').Router();
// Import the routes. This is how we make our routes modular.
const userRoutes = require('./userRoutes');
const homeRoutes = require('../homeRoutes');


// When a request is made to the /users or /projects path, it will be directed to the index.js in the /users or /projects folder.
router.use('/users', userRoutes);
router.use('/', homeRoutes);




module.exports = router;
