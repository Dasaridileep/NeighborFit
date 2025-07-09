# 📊 Data & Processing: NeighborFit

## 🗂️ Data Structure

Stored in `backend/data/neighborhoods.json`

```json
{
  "name": "BTM Layout",
  "city": "Bangalore",
  "cost": 6,
  "safety": 7,
  "nightlife": 8,
  "transport": 7,
  "greenery": 6
}
🌐 Data Sources
-Urban reviews on forums
-Google Maps reviews (manually gathered)
-Common knowledge about Indian cities

⚠️ Challenges
-No open API for neighborhood lifestyle scoring
-Manual balancing across cities was needed
-Inconsistencies in terminology (e.g., "Bandra West" vs "Bandra")

✅ Solution
-Standardized each city to have 3 neighborhoods
-Normalized ratings to 1–10 scale
-Stored in local .json file for simplicity and performance