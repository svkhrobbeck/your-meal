// elements
const elCategoriesWrapper = document.querySelector(".js-categories");

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

renderCategories(data.categories, elCategoriesWrapper);
