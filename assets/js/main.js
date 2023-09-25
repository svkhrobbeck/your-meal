// elements
const elCategories = document.getElementById("categories");
const elCategoriesWrapper = document.getElementById("categoriesWrapper");
const elMenu = document.getElementById("menu");
const elMenuCardsWrapper = document.getElementById("menuCards");
const elLoader = document.getElementById("loader");

// renderCategories
const renderCategories = (categories, elWrapper) => {
  elWrapper.innerHTML = "";
  let html = "";

  categories.forEach((category, idx) => {
    html += `
    <div class="category ${idx === activeIdx ? "category--active" : ""}" data-idx=${idx} data-category=${category.data}>
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

// getDistanceTop
const getDistanceTop = el => {
  const distance = window.pageYOffset + el.getBoundingClientRect().top;

  return distance;
};

// called functions
renderCategories(data.categories, elCategoriesWrapper);
renderMenuCards(data.menu.burgers, elMenuCardsWrapper);

const elCategoriesTop = getDistanceTop(elCategoriesWrapper.parentElement);

// events
window.addEventListener("scroll", () => {
  if (window.scrollY >= elCategoriesTop) {
    console.log("yes");
    elCategories.classList.add("categories--fixed");
  } else {
    elCategories.classList.remove("categories--fixed");
  }
});

// disable loader
setTimeout(() => {
  elLoader.classList.add("not-visible");

  setTimeout(() => {
    elLoader.classList.remove("not-visible");
    elLoader.classList.add("hidden");
  }, 500);
}, 1000);
