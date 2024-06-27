const summaryItems = document.querySelector(".summary__items");
const summaryFragment = new DocumentFragment();

async function getData() {
  try {
    const response = await fetch("../../data.json", { method: "GET" });
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      const item = data[i];

      const container = document.createElement("article");
      container.className = `summary__item summary__item__${item.category}`;
      container.innerHTML = `<div class="summary__item__info">
              <figure class="summary__item__info__logo">
                <img src="${item.icon}" alt="${item.category}" />
              </figure>
              <span class="summary__item__info__title">${item.category}</span>
            </div>
            <div class="summary__item__score">
              <span class="summary__item__score--large">${item.score}&ThinSpace;</span>
              <span class="summary__item__score--small">/ 100</span>
            </div>`;

      summaryFragment.appendChild(container);
    }

    summaryItems.appendChild(summaryFragment);
  } catch (error) {
    console.error("Error:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getData();
});
