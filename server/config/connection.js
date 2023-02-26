const mongoose = require('mongoose');
require("dotenv").config();

// || 'mongodb://localhost/googlebooks'
mongoose.connect(
    process.env.MONGODB_URI, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;
