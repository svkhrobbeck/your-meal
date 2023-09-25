// elements
const elLoader = document.getElementById("loader"),
  elCategories = document.getElementById("categories"),
  elMenu = document.getElementById("menu"),
  elMenuTitle = document.getElementById("menuTitle");

// variables
const selectedCategory = myLocalStorage.get("category");
const selectedIndex = data.categories.findIndex(item => item.data === selectedCategory);

// onCategoryClick
const onCategoryClick = e => {
  const element = e.target.closest("[data-category]");
  if (!element) return;

  const category = element.dataset.category;
  myLocalStorage.set("category", category);

  renderMenuCards(data.menu[category]);
  renderCategories(data.categories, +element.dataset.idx);
};

// onAddToCartClick
const onAddToCartClick = e => {
  const element = e.target.closest("[data-add-cart]");
  if (!element) return;

  const category = data.menu[element.dataset.addCart];
  const selectedProduct = category.find(item => item.id === element.dataset.id);

  const localData = !!myLocalStorage.get("cart") ? [...myLocalStorage.get("cart")] : [];
  const isExist = localData.findIndex(item => item.id === selectedProduct.id);

  if (isExist < 0) localData.push(selectedProduct);
  else localData.splice(isExist, 1);

  myLocalStorage.set("cart", localData);
  renderCartItems(localData);
  renderMenuCards(data.menu[selectedCategory || "burgers"]);

  if (elModal.classList.contains("modal--show")) {
    elModal.classList.remove("modal--show");
  }
};

// called functions
renderCategories(data.categories, selectedIndex);
renderMenuCards(data.menu[selectedCategory || "burgers"]);
renderCartItems(myLocalStorage.get("cart") || []);
const elCategoriesTop = getDistanceTop(elCategories);

// ==== * EVENTS * ====
// scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY >= elCategoriesTop) {
    elCategories.classList.add("categories--sticky");
  } else {
    elCategories.classList.remove("categories--sticky");
  }
});

// click event
document.addEventListener("click", e => {
  onCategoryClick(e);
  onAddToCartClick(e);

  // modal
  onAddModalOpenClick(e);
  onModalCloseClick(e);
  onModalOutSideCloseClick(e);
});

// disable loader
setTimeout(() => {
  elLoader.classList.add("not-visible");

  setTimeout(() => {
    elLoader.classList.remove("not-visible");
    elLoader.classList.add("hidden");
  }, 500);
}, 1000);
