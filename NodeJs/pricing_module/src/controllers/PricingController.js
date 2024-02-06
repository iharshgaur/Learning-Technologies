const PricingConfig = require('../models/PricingConfigModel');

// Controller functions
module.exports = {
  getAllConfigs: async (req, res) => {
    try {
      const configs = await PricingConfig.find();
      res.json(configs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  createConfig: async (req, res) => {
    try {
      const newConfig = await PricingConfig.create(req.body);
      res.json(newConfig);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  updateConfig: async (req, res) => {
    try {
      const updatedConfig = await PricingConfig.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedConfig);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
};
