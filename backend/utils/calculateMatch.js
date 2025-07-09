function calculateMatchScore(neighborhood, user) {
  // Max score per factor is 10, 5 factors = 50 max
  const maxScore = 50;
  const diff =
    Math.abs(user.cost - neighborhood.cost) +
    Math.abs(user.safety - neighborhood.safety) +
    Math.abs(user.nightlife - neighborhood.nightlife) +
    Math.abs(user.transport - neighborhood.transport) +
    Math.abs(user.greenery - neighborhood.greenery);

  return maxScore - diff; // Higher score means better match
}

module.exports = calculateMatchScore;
