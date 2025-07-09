import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    cost: 5,
    safety: 5,
    nightlife: 5,
    transport: 5,
    greenery: 5,
  });

  const [city, setCity] = useState("Bangalore");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferences: form, city })
      });

      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Could not fetch matches. See console.');
    }
  };

  return (
    <div className="container">
      <h1>🏠 NeighborFit: Because Where You Live Matters</h1>
<p>NeighborFit helps you find the neighborhoods that align with your lifestyle, city by city.</p>


      <form onSubmit={handleSubmit}>
        <label>Select City:</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Chennai">Chennai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Lucknow">Lucknow</option>
          <option value="Jaipur">Jaipur</option>
        </select>

        {['cost', 'safety', 'nightlife', 'transport', 'greenery'].map((factor) => (
          <div key={factor}>
            <label>{factor.charAt(0).toUpperCase() + factor.slice(1)} (1–10):</label>
            <input
              type="number"
              name={factor}
              value={form[factor]}
              onChange={handleChange}
              min="1"
              max="10"
              required
            />
          </div>
        ))}

        <button type="submit">Find Matches</button>
      </form>

      <div className="match-list">
        <h2>Top Matches:</h2>
        {results.length > 0 ? (
          results.map((place, idx) => (
            <div className="match-card" key={idx}>
              {place.name} — Match Score: {place.matchScore}
            </div>
          ))
        ) : (
          <p>No matches found for the selected city.</p>
        )}
      </div>
    </div>
  );
}

export default App;
