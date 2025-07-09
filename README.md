# 🏘️ NeighborFit

**NeighborFit** is a full-stack web application that helps users discover neighborhoods that best match their lifestyle preferences across various Indian cities.

### 🔗 Live Links
- **Frontend**: [neighbor-fit.vercel.app](https://neighbor-fit.vercel.app)
- **Backend API**: [neighborfit-backend.onrender.com/match](https://neighborfit-backend.onrender.com/match)

---

## 📌 Features

✅ City-based filtering  
✅ Smart matching algorithm based on lifestyle preferences  
✅ Responsive, clean user interface  
✅ Real-world neighborhood data  
✅ Edge case handling for unsupported cities  
✅ Lightweight and fast

---

## 🛠️ Tech Stack

| Frontend        | Backend         | Deployment      |
|----------------|-----------------|-----------------|
| React.js        | Node.js, Express.js | Vercel (Frontend) |
| HTML & CSS      | RESTful API     | Render (Backend) |
| JavaScript      | JSON-based data | GitHub          |

---

## 🧠 Matching Algorithm

A simple distance-based scoring system that compares the user's input with neighborhood data:

```
score = 50 - (
  |user.cost - neighborhood.cost| +
  |user.safety - neighborhood.safety| +
  |user.nightlife - neighborhood.nightlife| +
  |user.transport - neighborhood.transport| +
  |user.greenery - neighborhood.greenery|
)
```

> The top 5 highest scoring matches are returned to the user.

---

## 📂 Project Structure

```
neighborfit/
├── frontend/           # React frontend
│   ├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── backend/            # Express backend
│   ├── routes/
│   ├── utils/
│   ├── data/
│   ├── server.js
│   └── user_logs.json
├── docs/               # Project documentation
│   ├── PROBLEM.md
│   ├── DATA.md
│   ├── ALGORITHM.md
│   ├── TESTING.md
│   └── REFLECTION.md
└── README.md
```

---

## 📄 Documentation

All documents are in the `docs/` folder:

- `PROBLEM.md`: Problem definition & user research
- `DATA.md`: Data collection, cities & neighborhoods
- `ALGORITHM.md`: Matching algorithm explanation
- `TESTING.md`: Edge cases, validation & results
- `REFLECTION.md`: Evaluation, limitations, improvements

---

## 🚀 How to Run Locally

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm start
```

---

## 🙋‍♂️ Author

**Dasari Dileep**  
B.Tech CSE, Lovely Professional University  
GitHub: [github.com/Dasaridileep](https://github.com/Dasaridileep)

---

