// renderCategories
const renderCategories = (categories, activeIdx = 0) => {
  const elCategoriesWrapper = document.getElementById("categoriesWrapper");
  elCategoriesWrapper.innerHTML = "";

  elMenuTitle.textContent = categories.find((_, i) => i === activeIdx).text;

  categories.forEach((category, idx) => {
    elCategoriesWrapper.innerHTML += `
    <div class="category ${idx === activeIdx ? "category--active" : ""}" data-idx=${idx} data-category=${category.data}>
      <img class="category__image" src=${category.icon} alt=${category.alt} />
      <span class="category__text">${category.text}</span>
    </div>
    `;
  });
};

// renderMenuCards
const renderMenuCards = foods => {
  const elMenuCardsWrapper = document.getElementById("menuCards"),
    cartFoods = myLocalStorage.get("cart") || [];
  elMenuCardsWrapper.innerHTML = "";

  foods.forEach(food => {
    const isExist = !!cartFoods.find(item => item.id === food.id);

    elMenuCardsWrapper.innerHTML += `
    <div class="menu__card menu-card">
      <img class="menu-card__image" src=${food.image} alt=${food.alt} width="276" height="220" srcset="${
      food.image
    } 1x, ${food.image2x} 2x" />
      <p class="menu-card__price">${food.price}</p>
      <p class="menu-card__name">${food.name}</p>
      <p class="menu-card__weight">${food.weight}</p>
      <button class="menu-card__add-btn button--light" data-id=${food.id} ${
      isExist ? "data-add-cart" : "data-modal-open"
    }=${food.data}>${isExist ? "удалить" : "Добавить"}</button>
    </div>
    `;
  });
};

// renderCartItems
const renderCartItems = data => {
  const elCartList = document.getElementById("cartList"),
    elCartCount = document.getElementById("cartCount"),
    elTotalPrice = document.getElementById("cartTotalPrice"),
    totalPrice = data.reduce((a, b) => a + parseInt(b.price), 0);

  elCartList.innerHTML = "";
  elCartCount.textContent = data?.length;
  elTotalPrice.textContent = totalPrice + "₽";

  data.forEach(item => {
    elCartList.innerHTML += `
    <li class="cart__item item-cart" data-cart=${item.id}>
      <div class="item-cart__product">
        <img
          class="item-cart__image"
          src=${item.image}
          alt=${item.alt}
          width="64"
          height="52"
        />
        <div class="item-cart__content">
          <p class="item-cart__product-name">${item.name}</p>
          <span class="item-cart__weight">${item.weight}</span>
          <span class="item-cart__price">${item.price}</span>
        </div>
      </div>
      <div class="cart-count item-cart__count" data-cart-count=${item.id}>
        <button class="cart-count__dec">-</button>
        <input class="cart-count__input" type="number" value="1" min="0" />
        <button class="cart-count__inc">+</button>
      </div>
    </li>
    `;
  });
};

// renderAddModal
const renderAddModal = product => {
  const elModalContent = document.getElementById("modalContent");

  elModalContent.innerHTML = `
  <div class="add-modal">
    <h2 class="add-modal__title">${product.name}</h2>
    <div class="add-modal__inner">
      <div class="add-modal__inner-left">
        <img
          class="add-modal__img"
          src=${product.image}
          alt=${product.alt}
          width="276"
          height="220"
          srcset="${product.image} 1x, ${product.image2x} 2x"
        />
        <button class="button--dark-orange" data-id=${product.id} data-add-cart=${product.data}>Добавить</button>
      </div>
      <div class="add-modal__info">
        <p class="add-modal__desc">
          Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей
          сочностью, а хрустящие листья салата добавят свежести.
        </p>
        <ul class="add-modal__structures">
          <li class="add-modal__structure add-modal__structure--heading">Состав:</li>
          <li class="add-modal__structure">Пшеничная булочка</li>
          <li class="add-modal__structure">Котлета из говядины</li>
          <li class="add-modal__structure">Красный лук</li>
          <li class="add-modal__structure">Листья салата</li>
          <li class="add-modal__structure">Соус горчичный</li>
          <li class="add-modal__structure add-modal__structure--weight">520г, ккал 430</li>
        </ul>
        <div class="add-modal__count-price-wrapper">
          <div class="cart-count add-modal__cart-count" data-cart-count=${product.id}>
            <button class="cart-count__dec">-</button>
            <input class="cart-count__input" type="number" value="1" min="0" />
            <button class="cart-count__inc">+</button>
          </div>
          <p class="add-modal__price">${product.price}</p>
        </div>
      </div>
    </div>
  </div>
  `;
};