// Subscription Optimizer Script

// Sample subscription data (name, monthly cost in USD, usage frequency per month, cheaper alternative if any)
const subscriptions = [
  { name: "Netflix", cost: 13.99, usage: 10, alternative: { name: "Amazon Prime", cost: 8.99 } },
  { name: "Spotify", cost: 9.99, usage: 20, alternative: null },
  { name: "Gym Membership", cost: 50.00, usage: 2, alternative: { name: "Home Workout App", cost: 5.99 } },
  { name: "Adobe Creative Cloud", cost: 52.99, usage: 5, alternative: { name: "Affinity Suite", cost: 24.99 } },
  { name: "HBO Max", cost: 14.99, usage: 3, alternative: null }
];

// Usage threshold (e.g., if usage < threshold, subscription is underutilized)
const usageThreshold = 5;

// Function to analyze subscriptions
function analyzeSubscriptions(subs) {
  let totalCost = 0;
  const recommendations = [];

  subs.forEach(sub => {
    totalCost += sub.cost;

    // Check if subscription is underutilized
    if (sub.usage < usageThreshold) {
      let suggestion = `Consider canceling "${sub.name}" ($${sub.cost}/month) - low usage (${sub.usage} times/month).`;
      if (sub.alternative) {
        suggestion += ` Alternative: "${sub.alternative.name}" ($${sub.alternative.cost}/month).`;
      }
      recommendations.push(suggestion);
    } else {
      recommendations.push(`"${sub.name}" ($${sub.cost}/month) is used enough (${sub.usage} times/month) - keep it.`);
    }
  });

  return { totalCost, recommendations };
}

// Run the analysis
const result = analyzeSubscriptions(subscriptions);

// Output results
console.log(`Total Monthly Cost: $${result.totalCost.toFixed(2)}`);
console.log("\nRecommendations:");
result.recommendations.forEach(rec => console.log(rec));

// Example output:
// Total Monthly Cost: $141.96
// Recommendations:
// "Netflix" ($13.99/month) is used enough (10 times/month) - keep it.
// "Spotify" ($9.99/month) is used enough (20 times/month) - keep it.
// Consider canceling "Gym Membership" ($50.00/month) - low usage (2 times/month). Alternative: "Home Workout App" ($5.99/month).
// Consider canceling "Adobe Creative Cloud" ($52.99/month) - low usage (5 times/month). Alternative: "Affinity Suite" ($24.99/month).
// Consider canceling "HBO Max" ($14.99/month) - low usage (3 times/month).
