# 🔧 Algorithm Design: NeighborFit

## 🎯 Objective

Create a lightweight, scalable algorithm that scores each neighborhood based on how closely it matches the user's input preferences.

## 📈 Approach

We use a simple distance metric:
score = 50 - (
|user.cost - n.cost| +
|user.safety - n.safety| +
|user.nightlife - n.nightlife| +
|user.transport - n.transport| +
|user.greenery - n.greenery|
)

## ✅ Why This Approach?

- Keeps computation fast
- Easy to scale and debug
- Works well with normalized scores (1–10)
- Supports direct ranking

## 🔄 Sorting

Once each neighborhood is scored, we return the top 5 sorted by score descending.
