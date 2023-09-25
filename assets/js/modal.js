const elModal = document.getElementById("modal");

// onAddModalOpenClick
const onAddModalOpenClick = e => {
  const el = e.target.closest("[data-modal-open]");
  if (!el) return;

  const category = data.menu[el.dataset.modalOpen];
  const product = category.find(item => item.id === el.dataset.id);
  product.count += 1;

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

// countIncClick
const onModalIncClick = e => {
  const el = e.target.closest("[data-modal-inc]");
  if (!el) return;

  const category = data.menu[el.dataset.modalCategory];
  const product = category.find(item => item.id === el.dataset.modalInc);
  product.count += 1;
  renderAddModal(product);
};

// onModalDecClick
const onModalDecClick = e => {
  const el = e.target.closest("[data-modal-dec]");
  if (!el) return;

  const category = data.menu[el.dataset.modalCategory];
  const product = category.find(item => item.id === el.dataset.modalDec);
  if (product.count > 1) product.count -= 1;
  renderAddModal(product);
};
