const Subscription = require('../Models/Subscription');

exports.getSubscriptions = async (req, res) => {
  const subs = await Subscription.find();
  res.json(subs);
};

exports.createSubscription = async (req, res) => {
  const { type, price } = req.body;
  const sub = await Subscription.create({ type, price });
  res.json(sub);
};
