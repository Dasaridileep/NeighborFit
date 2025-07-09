const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend running!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
const fs = require('fs');
const path = require('path');

// Match API
app.post('/match', (req, res) => {
  const userPrefs = req.body; // { cost: 7, safety: 9, nightlife: 5, ... }

  const dataPath = path.join(__dirname, '../data/neighborhoods.json');
  const neighborhoods = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));

  // Scoring: higher score = better match
  const scored = neighborhoods.map((place) => {
    let score = 0;
    for (let key in userPrefs) {
      score += 10 - Math.abs(userPrefs[key] - place[key]);
    }
    return { ...place, matchScore: score };
  });

  // Sort by best score
  scored.sort((a, b) => b.matchScore - a.matchScore);

  res.json(scored);
});
