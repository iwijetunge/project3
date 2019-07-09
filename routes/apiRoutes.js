const router = require('express').Router();
const db = require('../models');
const seeds = require('../sightingSeeds.json');
require("dotenv").config();

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY; //don't forget to hide this
const expressJwt = require('express-jwt');
const jwtProtect = expressJwt({ secret: SECRET_KEY })

router.route('/sightings')
    .get((req,res,err) => {
        db.Sighting.find({})
        .sort({_id: -1})
        //.then(sightings => {console.log ("Got sightings: ", sightings); return sightings})
        .then(sightings => res.json(sightings))
        .catch(err => res.json(500, err))
    })
    .post(jwtProtect, (req, res, err) => {
  

        //format for post request

        // "location": {
        //     "coordinates": [
        //         -93.37645,
        //         44.17716
        //     ],
        //     "type": "Point"
        // },
        // "comments": [],
        // "animalType": "wilderbeast",
        // "datetime": "2016-05-18T16:00:00.000Z",
        // "status": "Active",
        // "dangerous": true,
        // "isWild": true,
        // "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Meleagris_ocellata1.jpg/220px-Meleagris_ocellata1.jpg",
        // "comment": "He was crazy",





        const newSighting = req.body;
        // const userId = req.User.data._id;
        let createdSighting;

        db.Sighting.create(newSighting)
            .then(sighting => {createdSighting = sighting; return sighting})
            // .then(() => db.User.findOne({_id: userId}))
            // .then(dbUser => dbUser.update({$push:{sightings: createdSighting._id}}))
            .then(result => res.json(createdSighting))
            .catch(err => res.json(500, err))
    });


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
    .get((req,res,err) => {
        db.Sighting.find().
            where('animalType').equals(req.body.animalType).
            where('location').near({ center: {
                type:'Point',
                coordinates: [req.body.lon, req.body.lat]
            }, maxDistance: 5}).//max distance divided to give km on a sphere
            where('status').equals(req.body.status).
            then(sightings => res.json(sightings))


        // Person.
        //     find({
        //     occupation: /host/,
        //     'name.last': 'Ghost',
        //     age: { $gt: 17, $lt: 66 },
        //     likes: { $in: ['vaporizing', 'talking'] }
        //     }).
        //     limit(10).
        //     sort({ occupation: -1 }).
        //     select({ name: 1, occupation: 1 }).
        //     exec(callback);
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

router.route('/users')
    .get((req,res,err) => {
        res.json("get user");
    })
    .post((req, res, err) => {
        res.json("post user");
    })

module.exports = router;