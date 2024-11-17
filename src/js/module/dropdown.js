export class DropdownManager {
  constructor(links) {
    this.links = links;
    this.init();
  }

  init() {
    this.links.forEach(link => link.addEventListener('click', this.handleLinkClick.bind(this)))

  }

  handleLinkClick(event) {
    event.preventDefault();

    const target = event.target
    const dropdownId = target.parentElement.getAttribute('data-dropdown');
    let dropdown = document.getElementById(dropdownId);

    if (!dropdown) return;

    if (!target.closest('.active')) this.checkActiveLinks();

    target.classList.toggle('active');
    dropdown.classList.toggle('show');

  }

  checkActiveLinks() {
    const activeLinks = document.querySelectorAll('.nav__link.active');

    activeLinks.forEach((activeLink) => {
      activeLink.classList.remove('active');
      const parentElement = activeLink.parentElement;
      const list = parentElement.querySelector('.dropdown__list');
      list.classList.remove('show');
    });
  }
}