const express = require('express');
const { uploadVideo, getAllVideos } = require('../Controllers/videoController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/upload', protect, uploadVideo);
router.get('/', getAllVideos);

module.exports = router;
