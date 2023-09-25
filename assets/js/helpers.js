// myLocalStorage
const myLocalStorage = {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
  clear() {
    localStorage.clear();
  },
};

// getDistanceTop
const getDistanceTop = el => {
  const distance = window.pageYOffset + el.getBoundingClientRect().top;
  return distance;
};
