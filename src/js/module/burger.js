
export class BurgerMenuManager {
  constructor(burgerBtn) {
    this.burgerBtn = burgerBtn;
    this.headerMenu = document.querySelector('.header__menu');
    this.init();
  }

  init() {
    this.burgerBtn.addEventListener('click', this.toggleBurgerMenu.bind(this));
  }

  toggleBurgerMenu() {
    this.headerMenu.classList.toggle('active-menu');
  }
}