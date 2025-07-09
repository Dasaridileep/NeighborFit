# 🏘️ NeighborFit

**NeighborFit** is a full-stack web application that helps users find neighborhoods that best match their lifestyle preferences using a scoring algorithm and local data.

---

## 🌟 Features

- Submit lifestyle preferences (cost, safety, nightlife, transport, greenery)
- See top matching neighborhoods ranked by score
- Backend scoring algorithm
- Logging of user requests
- Basic error handling
- Fully responsive form UI (React)

---

## 🚀 Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Data**: Static JSON
- **Dev Tools**: Thunder Client/Postman

---

## 📂 Project Structure

neighborfit/
├── backend/
│ ├── data/
│ │ └── neighborhoods.json
│ ├── logs/
│ │ └── user_logs.json
│ ├── routes/
│ │ └── match.js
│ ├── utils/
│ │ ├── calculateMatch.js
│ │ └── logger.js
│ └── server.js
├── frontend/
│ ├── src/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json

---

## 🔁 How It Works

1. User enters preference scores from 1–10.
2. These values are sent to the backend `/match` API.
3. Backend compares preferences to each neighborhood's attributes and calculates a match score.
4. Top matches are returned and shown to the user.

---

## 📝 Sample Input

```json
{
  "cost": 5,
  "safety": 7,
  "nightlife": 6,
  "transport": 8,
  "greenery": 6
}
  ## 📝 Sample Output
[
  { "name": "BTM Layout", "matchScore": 41 },
  { "name": "HSR Layout", "matchScore": 37 },
  ...
]
