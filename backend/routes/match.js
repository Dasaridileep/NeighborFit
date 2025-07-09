const express = require('express');
const router = express.Router();
const neighborhoods = require('../data/neighborhoods.json');
const calculateMatch = require('../utils/calculateMatch');
const appendLog = require('../utils/logger');

router.post('/', (req, res) => {
  const { preferences, city } = req.body;

  if (!preferences || !city) {
    return res.status(400).json({ error: 'Preferences and city are required.' });
  }

  const filtered = neighborhoods.filter(n => n.city === city);

  if (filtered.length === 0) {
    return res.status(404).json({ error: 'No neighborhoods found for the selected city.' });
  }

  const matches = filtered.map(n => ({
    name: n.name,
    matchScore: calculateMatch(n, preferences)
  }));

  matches.sort((a, b) => b.matchScore - a.matchScore);

  appendLog({ timestamp: Date.now(), city, preferences });

  res.json(matches.slice(0, 5));
});

module.exports = router;
