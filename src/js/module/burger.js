import { ToggleLockBody } from "./helpers/ToggleLockBody.js";

export class BurgerMenuManager extends ToggleLockBody {
  constructor(burgerBtn) {
    super();
    this.burgerBtn = burgerBtn;
    this.headerMenu = document.querySelector('.header__menu');

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.event = this.event.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.init();
  }

  init() {
    if (!this.burgerBtn) return
    this.burgerBtn.addEventListener('click', this.toggleBurgerMenu.bind(this));
  }

  open() {
    this.headerMenu.classList.add('active-menu');
    this.disableScroll()
  }
  close() {
    this.headerMenu.classList.remove('active-menu');
    this.enableScroll()
    this.removeEvent()
  }

  event(item) {
    if (!item) return;
    item.addEventListener('click', this.close);
  }

  removeEvent() {
    window.removeEventListener('click', this.close);
  }

  toggleBurgerMenu() {
    !this.headerMenu.classList.contains('active-menu') ? this.open() : this.close();
    const closeBtn = this.headerMenu.querySelector('.active-menu .btn-close');

    this.event(closeBtn);
  }
}