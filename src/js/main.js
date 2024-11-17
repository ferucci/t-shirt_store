
import { DropdownManager } from "./module/dropdown.js";
import { BurgerMenuManager } from "./module/burger.js";
import { vars } from "./module/vars.js";
import { Modal } from "./module/modal.js";

window.addEventListener("DOMContentLoaded", () => {

  const { menuLinks, burgerBtn } = vars;

  new DropdownManager(menuLinks);
  new BurgerMenuManager(burgerBtn);

  const modal = new Modal({
    isOpen: (modal) => { },

    isClose: (modal) => { }
  });

})