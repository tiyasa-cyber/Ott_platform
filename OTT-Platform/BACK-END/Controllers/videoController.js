const Video = require('../Models/Videos');

exports.uploadVideo = async (req, res) => {
  const { title, description, videoUrl, access } = req.body;
  try {
    const video = await Video.create({
      title,
      description,
      videoUrl,
      access,
      uploadedBy: req.user._id
    });
    res.json(video);
  } catch (err) {
    res.status(400).json({ msg: 'Upload failed' });
  }
};

exports.getAllVideos = async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
};
