const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes');

router.use('/', homeRoutes);
// make sure /login can be used
router.use('/login', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;