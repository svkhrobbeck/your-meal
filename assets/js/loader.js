const elLoader = document.getElementById("loader");

// disable loader
setTimeout(() => {
  elLoader.classList.add("not-visible");
  document.body.classList.remove("hidden");

  setTimeout(() => {
    elLoader.classList.remove("not-visible");
    elLoader.classList.add("hidden");
  }, 500);
}, 1000);
