const express = require('express');
const router = express.Router();
const pricingController = require('../controllers/PricingController');

// Define routes
router.get('/', pricingController.getAllConfigs);
router.post('/', pricingController.createConfig);
router.put('/:id', pricingController.updateConfig); // Update pricing configuration

module.exports = router;
