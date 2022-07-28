const router = require('express').Router();
const userRoutes = require('./userRoutes');

const commnetRoutes = require('./commentRoutes');

router.use('/comment',commnetRoutes);
router.use('/users', userRoutes);

module.exports = router;
