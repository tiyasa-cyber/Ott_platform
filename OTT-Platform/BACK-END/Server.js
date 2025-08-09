const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const videoRoutes = require('./Routes/videoRoutes');
const subscriptionRoutes = require('./Routes/subscriptionsRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/subscriptions', subscriptionRoutes);

const PORT = process.env.PORT || 3600;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
