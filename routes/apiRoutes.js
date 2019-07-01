const router = require('express').Router();
const db = require('../models');
const seeds = require('../sightingSeeds.json');

router.route('/sightings')
    .get((req,res,err) => {
        res.json(seeds);
    })


module.exports = router;