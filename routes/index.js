const router = require('express').Router();
router.use('/api', require('./apiRoutes'));
router.use('/auth', require('./authRoutes'));
router.use('/util', require('./utilRoutes'));

module.exports = router;
