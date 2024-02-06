const mongoose = require('mongoose');

const pricingConfigSchema = new mongoose.Schema({
  distanceBasePrice: {
    type: Number,
    required: true,
  },
  distanceAdditionalPrice: {
    type: Number,
    required: true,
  },
  timeMultiplierFactor: {
    type: Number,
    required: true,
  },
  waitingCharges: {
    type: Number,
    required: true,
  },
  // Add other fields based on your pricing components
  daysOfWeek: {
    type: [String], // Array of days when the pricing is applicable
    required: true,
  },
  tierLevels: {
    type: Number,
    required: true,
  },
});

const PricingConfig = mongoose.model('PricingConfig', pricingConfigSchema);

module.exports = PricingConfig;