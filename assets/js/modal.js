const elModal = document.getElementById("modal");

// onAddModalOpenClick
const onAddModalOpenClick = e => {
  const el = e.target.closest("[data-modal-open]");
  if (!el) return;

  const category = data.menu[el.dataset.modalOpen];
  const product = category.find(item => item.id === el.dataset.id);
  if (product.count < 1) product.count = 1;

  renderAddModal(product);
  elModal.classList.add("modal--show");
};

// onAddModalCloseClick
const onModalCloseClick = e => {
  const el = e.target.closest("[data-modal-close]");
  if (!el) return;
  elModal.classList.remove("modal--show");
};

// onAddModalOutSideCloseClick
const onModalOutSideCloseClick = e => {
  const el = e.target;
  if (!el.matches("#modal")) return;

  elModal.classList.remove("modal--show");
};
