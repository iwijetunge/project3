const router = require('express').Router();
const db = require('../models');
const seeds = require('../sightingSeeds.json');

router.route('/sightings')
    .get((req,res,err) => {
        res.json(seeds);
    })

router.route('/user/:id/sightings')
    .get((req,res,err) => {
        res.json(seeds);
    })
    .post((req,res,err) => {
        res.json("post sighting");
    })

router.route('/user/:id/sightings/:id')
    .get((req,res,err) => {
        res.json(seeds[0]);
    })
    .put((req,res,err) => {
        res.json("edit sighting");
    })
    .delete((req,res,err) => {
        res.json("delete sighting");
    })

router.route('/search')
    .get((req,res,err) => {
        res.json(seeds);
    })

router.route('/sightings/:id/comments')
    .get((req,res,err) => {
        res.json("get comments");
    })
    .post((req,res,err) => {
        res.json("post");
    })

router.route('/sightings/:id/comments/:id')
    .get((req,res,err) => {
        res.json("comment");
    })
    .put((req,res,err) => {
        res.json("edit comment");
    })

router.route('/user')
    .get((req,res,err) => {
        res.json("get user");
    })
    .post((req,res,err) => {
        res.json("post user");
    })

module.exports = router;