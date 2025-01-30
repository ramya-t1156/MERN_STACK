require('dotenv').config()

const mongoURL = "mongodb://localhost:27017/libraryDB";  // Load MONGO_URL from the .env file
const PORT = process.env.PORT || 5000;   // Use PORT from .env, default to 5000 if not defined

module.exports = { mongoURL, PORT };
