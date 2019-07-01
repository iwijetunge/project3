const router = require('express').Router();
const db = require("../models");

router.get('/seed', (req, res, err) => {
    // const seeds = require('../sightingSeeds.json');

    // Promise.all(
    //     seeds.map(sighting => db.Sighting.create(sighting))
    // )
    // .then(sighting => res.json(sighting));

    res.json({"whoomp": "there it is"});

});

module.exports = router;