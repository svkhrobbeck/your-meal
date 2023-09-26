// elements
const elLoader = document.getElementById("loader"),
  elCategories = document.getElementById("categories"),
  elMenu = document.getElementById("menu"),
  elMenuTitle = document.getElementById("menuTitle");

// variables
const selectedCategory = myLocalStorage.get("category") || "burgers";
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

// onToggleToCartClick
const onToggleToCartClick = e => {
  const element = e.target.closest("[data-add-cart]");
  if (!element) return;

  const category = data.menu[element.dataset.addCart];
  const selectedProduct = category.find(item => item.id === element.dataset.id);

  const localData = !!myLocalStorage.get("cart") ? [...myLocalStorage.get("cart")] : [];
  const isExist = localData.findIndex(item => item.id === selectedProduct.id);

  if (isExist < 0) {
    if (selectedProduct.count === 0) selectedProduct.count = 1;
    localData.push(selectedProduct);
  } else {
    selectedProduct.count = 0;
    localData.splice(isExist, 1);
  }

  myLocalStorage.set("cart", localData);
  renderCartItems(localData);
  renderMenuCards(data.menu[selectedCategory || "burgers"]);

  if (elModal.classList.contains("modal--show")) {
    elModal.classList.remove("modal--show");
  }
};

// onCountIncClick
const onCountIncClick = e => {
  const el = e.target.closest("[data-count-inc]");
  if (!el) return;

  const id = el.parentElement.dataset.cartCount;
  const localData = !!myLocalStorage.get("cart") ? [...myLocalStorage.get("cart")] : [];

  const product = localData.find(item => item.id === id) || {};
  product.count += 1;

  myLocalStorage.set("cart", localData);
  renderCartItems(myLocalStorage.get("cart") || []);
};

// onCountDecClick
const onCountDecClick = e => {
  const el = e.target.closest("[data-count-dec]");
  if (!el) return;

  const id = el.parentElement.dataset.cartCount;
  const localData = !!myLocalStorage.get("cart") ? [...myLocalStorage.get("cart")] : [];

  const product = localData.find(item => item.id === id);
  const idx = localData.findIndex(item => item.id === id);
  if (product.count > 1) {
    product.count -= 1;
  }

  console.log(product.count);
  if (product.count < 1) {
    localData.splice(idx, 1);
  }

  myLocalStorage.set("cart", localData);
  renderCartItems(myLocalStorage.get("cart") || []);
};

// onCartDelClick
const onCartDelClick = e => {
  const el = e.target.closest("[data-cart-del]");
  if (!el) return;

  const dataset = el.parentElement.dataset;
  const id = dataset.cartCount;

  const localData = !!myLocalStorage.get("cart") ? [...myLocalStorage.get("cart")] : [];
  const idx = localData.findIndex(item => item.id === id);
  localData.splice(idx, 1);

  myLocalStorage.set("cart", localData);
  renderCartItems(localData);
  renderMenuCards(data.menu[selectedCategory]);
};

// called functions
renderCategories(data.categories, selectedIndex);
renderMenuCards(data.menu[selectedCategory]);
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
  onToggleToCartClick(e);
  onCountIncClick(e);
  onCountDecClick(e);
  onCartDelClick(e);

  // modal
  onAddModalOpenClick(e);
  onModalCloseClick(e);
  onModalOutSideCloseClick(e);
  onModalIncClick(e);
  onModalDecClick(e);
});

// disable loader
setTimeout(() => {
  elLoader.classList.add("not-visible");

  setTimeout(() => {
    elLoader.classList.remove("not-visible");
    elLoader.classList.add("hidden");
  }, 500);
}, 1000);
