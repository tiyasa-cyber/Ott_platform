const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  type: { type: String, enum: ['Free', 'Premium'], default: 'Free' },
  price: Number
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
