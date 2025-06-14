// Load dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Loads your .env file

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Lets frontend talk to backend
app.use(express.json()); // Parses JSON request bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Basic test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

const Rooms_Routes = require('./routes/Rooms_Routes');
app.use('/api/Rooms', Rooms_Routes);

const Accounts_Routes = require('./routes/Accounts_Routes');
app.use('/api/Accounts', Accounts_Routes);