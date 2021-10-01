const { Router } = require('express');
const { reviewsMeta } = require('../../controllers');

const router = Router();

router.get('/', reviewsMeta.fetchReviewsById);

module.exports = router;
