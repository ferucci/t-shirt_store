import { ToggleLockBody } from "../helpers/ToggleLockBody.js";

export class Modal extends ToggleLockBody {
  constructor(options) {
    super();
    let defaultOptions = {
      isOpen: () => { },
      isClose: () => { }
    }
    this.options = Object.assign(defaultOptions, options);
    this.modal = document.querySelector('.popup');
    this.speed = false;
    this.animation = false;
    this._reOpen = false;
    this._nextContainer = false;
    this.isOpen = false;
    this.modalContainer = false;
    this.previousActiveElement = false;
    this.focusElements = [
      'a[href]',
      'input',
      'button',
      'select',
      'textarea',
      'iframe',
      '[contenteditable]',
      '[tabindex]:not([tabindex^="-"])'
    ];

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.focusCatch = this.focusCatch.bind(this);
    this.focusTrap = this.focusTrap.bind(this);

    this.events();
  }

  events() {
    if (this.modal) {
      document.addEventListener('click', (e) => {
        // e.preventDefault()
        const clickedElement = e.target.closest('[data-path');

        if (clickedElement) {
          let target = clickedElement.dataset.path;
          let animation = clickedElement.dataset.animation;
          let speed = clickedElement.dataset.speed;
          this.animation = animation ? animation : 'fade';
          this.speed = speed ? parseInt(speed) : 300;
          this._nextContainer = document.querySelector(`[data-target="${target}"]`);
          this.open();
          return;
        }

        if (e.target.closest('.btn-close')) {
          this.close();
          return;
        }
      });

      window.addEventListener('keydown', (e) => {
        if (e.keyCode == 27) {
          if (this.isOpen) {
            this.close();
          }
        }

        if (e.keyCode == 9 && this.isOpen) {
          this.focusCatch(e);
          return;
        }
      })

      window.addEventListener('click', (e) => {
        if (!e.target.classList.contains('popup__wrapp') &&
          !e.target.closest('.popup__wrapp') && this.isOpen) {
          this.close();
        }
      })
    }
  }

  open(selector) {
    this.previousActiveElement = document.activeElement;

    if (this.isOpen) {
      this.reOpen = true;
      this.close();
      return;
    }

    this.modalContainer = this._nextContainer;

    if (selector) {
      this.modalContainer = document.querySelector(`[data-target="${selector}"]`);
    }

    this.modalContainer.scrollTo(0, 0);
    this.modal.style.setProperty('$transition-time', `${this.speed / 1000}s`);
    this.modal.classList.add('is-open');

    document.body.style.scrollBehavior = 'auto';
    document.documentElement.style.scrollBehavior = 'auto';

    this.disableScroll();

    this.modalContainer.classList.add('popup-open');
    this.modalContainer.classList.add(this.animation);

    setTimeout(() => {
      this.modalContainer.classList.add('animate-open');
      this.options.isOpen(this);
      this.isOpen = true;
      this.focusTrap();
    }, this.speed);

    // Запускаю слайдер при открытии модального окна. Его обязательно нужно выключить! 
    // new Slider2(document.querySelector('.offers-games__items'), {
    //   margin: 20,
    // })
  }

  close() {
    if (this.modalContainer) {
      this.modalContainer.classList.remove('animate-open');
      this.modalContainer.classList.remove(this.animation);
      this.modal.classList.remove('is-open');
      this.modalContainer.classList.remove('popup-open');

      this.enableScroll();

      document.body.style.scrollBehavior = 'auto';
      document.documentElement.style.scrollBehavior = 'auto';

      this.options.isClose(this);
      this.isOpen = false;
      this.focusTrap();

      if (this.reOpen) {
        this.reOpen = false;
        this.open();
      }
    }
  }

  focusCatch(e) {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);
    const focusArr = Array.prototype.slice.call(focusable);
    const focusedIdx = focusArr.indexOf(document.activeElement);

    if (e.shiftKey && focusedIdx === 0) {
      focusArr[focusArr.length - 1].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedIdx === focusArr.length - 1) {
      focusArr[0].focus();
      e.preventDefault();
    }
  }

  focusTrap() {
    const focusable = this.modalContainer.querySelectorAll(this.focusElements);

    if (this.isOpen) {
      if (focusable) focusable[focusable.length - 1].focus();
    } else {
      this.previousActiveElement.focus();
    }
  }
}


