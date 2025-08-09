const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String, // Store path or cloud URL
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  access: { type: String, enum: ['Free', 'Premium'], default: 'Free' }
});

module.exports = mongoose.model('Video', videoSchema);
