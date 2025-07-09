const express = require('express');
const cors = require('cors');
const matchRoute = require('./routes/match');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/match', matchRoute);

// Test route
app.get('/', (req, res) => {
  res.send('NeighborFit backend is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
