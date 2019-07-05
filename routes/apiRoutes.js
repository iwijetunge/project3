const router = require('express').Router();
const db = require('../models');
const seeds = require('../sightingSeeds.json');
require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY; //don't forget to hide this
const expressJwt = require('express-jwt');
const jwtProtect = expressJwt({ secret: SECRET_KEY })

router.route('/sightings')
    .get((req, res, err) => {
        res.json(seeds);
    })

router.route('/user/:id/sightings')
    .get((req, res, err) => {
        res.json(seeds);
    })
    .post((req, res, err) => {
        res.json("post sighting");
    })
    .get(jwtProtect, async (req, res, err) => {
        try {
            let mySightings = await db.User.findOne({ _id: req.user.data._id })
                .populate("sightings")
            res.json(mySightings.sightings)
        }
        catch (err) { res.json(500, err) }
    })
    .post(jwtProtect, (req, res, err) => {
        const userId = req.user.data._id;
        let createdSighting;
        db.Sighting.create(newSighting)
            .then(sighting => { createdSighting = sighting; return sighting })
            .then(() => db.User.findOne({ _id: userId }))
            .then(dbUser => dbUser.update({ $push: { sightings: createdSighting._id } }))
            .then(result => res.json(createdSighting))
            .catch(error => res.json(500, error))
    })

router.route('/user/:id/sightings/:id')
    .get((req, res, err) => {
        res.json(seeds[0]);
    })
    .put((req, res, err) => {
        res.json("edit sighting");
    })
    .delete((req, res, err) => {
        res.json("delete sighting");
    })

router.route('/search')
    .get((req, res, err) => {
        res.json(seeds);
    })

router.route('/sightings/:id/comments')
    .get((req, res, err) => {
        res.json("get comments");
    })
    .post((req, res, err) => {
        res.json("post");
    })

router.route('/sightings/:id/comments/:id')
    .get((req, res, err) => {
        res.json("comment");
    })
    .put((req, res, err) => {
        res.json("edit comment");
    })

router.route('/user')
    .get((req, res, err) => {
        res.json("get user");
    })
    .post((req, res, err) => {
        res.json("post user");
    })

module.exports = router;