// elements
const elCategoriesWrapper = document.querySelector(".js-categories");
const elMenuCardsWrapper = document.querySelector(".js-menu-cards");

// renderCategories
const renderCategories = (categories, elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  categories.forEach((category, idx) => {
    html += `
    <div class="category ${idx === 0 ? "category--active" : ""}">
      <img class="category__image" src=${category.icon} alt=${category.alt} />
      <span class="category__text">${category.text}</span>
    </div>
    `;
  });

  elWrapper.innerHTML = html;
};

// renderMenuCards
const renderMenuCards = (foods, elWrapper) => {
  elWrapper.innerHTML = "";
  const html = [];

  foods.forEach(food => {
    const elMenuCard = document.createElement("div");
    elMenuCard.classList.add("menu__card", "menu-card");

    elMenuCard.innerHTML = `
      <img class="menu-card__image" src=${food.image} alt=${food.alt} width="276" height="220" srcset="${food.image} 1x, ${food.image2x} 2x" />
      <p class="menu-card__price">${food.price}</p>
      <p class="menu-card__name">${food.name}</p>
      <p class="menu-card__weight">${food.weight}</p>
      <button class="menu-card__add-btn button--light">Добавить</button>
    `;

    html.push(elMenuCard);
  });

  elWrapper.append(...html);
};

// called functions
renderCategories(data.categories, elCategoriesWrapper);
renderMenuCards(data.menu.burgers, elMenuCardsWrapper);
