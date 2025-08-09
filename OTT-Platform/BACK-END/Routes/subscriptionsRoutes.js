const express = require('express');
const { getSubscriptions, createSubscription } = require('../Controllers/subscriptionController');
const router = express.Router();

router.get('/', getSubscriptions);
router.post('/create', createSubscription);

module.exports = router;
