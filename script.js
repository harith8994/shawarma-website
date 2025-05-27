const imageMap = {
  "4 Burner Shawarma Machine": "shawarma-4burner.jpg",
  "3 Burner Shawarma Machine": "shawarma-3burner.jpg",
  "2 Burner Shawarma Machine": "shawarma-2burner.jpg"
};

Object.entries(kesPrices).forEach(([name, kes]) => {
  const priceUSD = (kes * usdRate).toFixed(2);

  const card = document.createElement("div");
  card.className = "machine";

  card.innerHTML = `
    <h2>${name}</h2>
    <img src="images/${imageMap[name]}" alt="${name}" style="width:100%; border-radius: 8px; margin-bottom: 10px;" />
    <p><strong>About:</strong> High-quality, durable shawarma machine built for heavy-duty use.</p>
    <p><strong>Price:</strong> $${priceUSD} USD</p>
    <label for="country">Shipping to:</label>
    <select onchange="showShipping(this)">
      <option disabled selected>Select country</option>
      ${Object.keys(shippingRates).map(country => `<option value="${country}">${country}</option>`).join('')}
    </select>
    <p class="shipping-result"></p>
  `;

  machinesContainer.appendChild(card);
});
