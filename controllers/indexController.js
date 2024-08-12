// Import just the router express
const router = require('express').Router();
// Import the index.js from 'api' folder
const apiRoutes = require('./api');
const { Project, User } = require('../models')

// When a request is made to the /api route, it will be directed to the index.js in the 'api' folder.
router.use('/api', apiRoutes);
// router.use('/', apiRoutes)

router.get('/', async (req, res) => {
    const allProjects = await Project.findAll({
        include:[
            {
              model: User,
              attributes: ['name']
            }
          ]
    })
    console.log(allProjects);
    res.render('all', {data: allProjects})
})

module.exports = router;
