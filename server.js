// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', require('./routes/itemRoutes'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
