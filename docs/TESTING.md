
---

### ✅ `TESTING.md` — Testing & Validation

```markdown
# ✅ Testing Plan: NeighborFit

## 🔌 Backend API Testing

Used **ThunderClient** to send POST requests to `/match`.

### ✅ Sample Test Case

```json
{
  "city": "Mumbai",
  "preferences": {
    "cost": 6,
    "safety": 7,
    "nightlife": 6,
    "transport": 8,
    "greenery": 5
  }
}
✅ Response
Returns top 5 neighborhoods with scores. Validated results manually against expected outputs.

🔍 Frontend Testing
Input validation (1–10 range)=
Dropdown change updates city
Renders top matches dynamically
Handles server errors gracefully

⚠️ Edge Cases Tested
Missing fields
Invalid city names
Empty dataset
Extreme preferences (e.g., 10 for all factors)