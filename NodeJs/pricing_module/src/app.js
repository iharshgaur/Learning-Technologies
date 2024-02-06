const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
const pricingRoutes = require('./routes/PricingRoutes.js');
app.use('/api/pricing', pricingRoutes);

// Start server
const PORT = config.port || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
