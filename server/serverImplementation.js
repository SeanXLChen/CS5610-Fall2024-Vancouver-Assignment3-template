const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*', allowedHeaders: ['Content-Type', 'Authorization'] }));

// TODO: Add your routes here

module.exports = app;  // Export the Express app
