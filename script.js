const distributors = [
  {
    name: "Alpha Distributors",
    shippedLastMonth: 1200,
    forecastNextMonth: 1350,
    averagePerMonth: 1180,
  },
  {
    name: "Beta Logistics",
    shippedLastMonth: 950,
    forecastNextMonth: 1020,
    averagePerMonth: 980,
  },
  {
    name: "Gamma Supplies",
    shippedLastMonth: 1100,
    forecastNextMonth: 1250,
    averagePerMonth: 1070,
  }
];

function createCard(distributor) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <h2>${distributor.name}</h2>
    <p class="metric"><strong>Shipped Last Month:</strong> ${distributor.shippedLastMonth}</p>
    <p class="metric"><strong>Forecast Next Month:</strong> ${distributor.forecastNextMonth}</p>
    <p class="metric"><strong>Avg/Month (YTD):</strong> ${distributor.averagePerMonth}</p>
  `;
  return card;
}

const dashboard = document.getElementById("dashboard");
distributors.forEach(d => dashboard.appendChild(createCard(d)));
