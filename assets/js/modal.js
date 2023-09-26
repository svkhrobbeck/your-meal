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
  document.body.classList.add("hidden");
};

// onDeliveryModalOpenClick
const onDeliveryModalOpenClick = e => {
  const el = e.target.closest("[data-order-btn]");
  if (!el) return;

  renderDeliveryModal();
  elModal.classList.add("modal--show");
  document.body.classList.add("hidden");
};

// onAddModalCloseClick
const onModalCloseClick = e => {
  const el = e.target.closest("[data-modal-close]");
  if (!el) return;
  elModal.classList.remove("modal--show");
  document.body.classList.remove("hidden");
};

// onAddModalOutSideCloseClick
const onModalOutSideCloseClick = e => {
  const el = e.target;
  if (!el.matches("#modal")) return;

  elModal.classList.remove("modal--show");
  document.body.classList.remove("hidden");
};

// deliveryModalSubmit
const deliveryModalSubmit = e => {
  const el = e.target.closest("[data-delivery-form]");
  if (!el) return;
  e.preventDefault();

  elModal.classList.remove("modal--show");
  document.body.classList.remove("hidden");
  el.reset();
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
