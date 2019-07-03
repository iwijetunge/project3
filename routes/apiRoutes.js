const router = require('express').Router();
const db = require('../models');
const seeds = require('../sightingSeeds.json');

router.route('/sightings')
    .get((req,res,err) => {
        res.json(seeds);
    })

module.exports = router;

router.route("/signtings")
    .get((req, res, err) => {
        db.--.findOne({ _id: req.params.id})
            .then(sightings => { console.log(""); return sightings; })
            .then(sightings => res.json(sightings))
            .catch(error => res.json(500, error))
    })
