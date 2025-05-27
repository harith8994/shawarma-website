const imageMap = {
  "4 Burner Shawarma Machine": "images/shawarma-4burner.jpg",
  "3 Burner Shawarma Machine": "images/shawarma-3burner.jpg",
  "2 Burner Shawarma Machine": "images/shawarma-2burner.jpg"
};

Object.entries(kesPrices).forEach(([name, kes]) => {
  const priceUSD = (kes * usdRate).toFixed(2);
  const imageSrc = imageMap[name];

  const card = document.createElement("div");
  card.className = "machine";

  card.innerHTML = `
    <img src="${imageSrc}" alt="${name}" class="machine-img">
    <h2>${name}</h2>
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
