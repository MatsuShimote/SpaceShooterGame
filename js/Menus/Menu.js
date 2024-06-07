class Menu {
  #el;

  open() {
    this.#el.style.display = "flex";
  }

  close() {
    this.#el.style.display = "none";
  }
}

export default Menu;
