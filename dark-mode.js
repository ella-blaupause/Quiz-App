const DARK_MODE_STORE = 'dark_mode';

const bodyElement = document.querySelector('body');
const toggleDark = document.querySelector('[data-js="toggle-dark"]');

const set_darkmode = (new_value) => {
  localStorage.setItem(DARK_MODE_STORE, new_value);
  if (!new_value) {
    toggleDark?.classList.remove("switch-button--dark");
    bodyElement?.classList.remove("dark");
  } else {
    toggleDark?.classList.add("switch-button--dark");
    bodyElement?.classList.add("dark");
  }
}

const get_darkmode = () => {
  return JSON.parse(localStorage.getItem(DARK_MODE_STORE)) ?? false;
}

const toggle_darkmode = () => {
  const dark_mode = get_darkmode();
  set_darkmode(!dark_mode);
}

toggleDark?.addEventListener("click", toggle_darkmode);


set_darkmode(get_darkmode());
