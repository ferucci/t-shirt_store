
import { DropdownManager } from "./module/dropdown.js";
import { BurgerMenuManager } from "./module/burger.js";
import { vars } from "./module/vars.js";
import { Modal } from "./module/modal/index.js";
import { swiperSliders } from "./module/swiper.js";

window.addEventListener("DOMContentLoaded", () => {

  const { menuLinks, burgerBtn, headerSlider, productsSlider } = vars;

  new DropdownManager(menuLinks);
  new BurgerMenuManager(burgerBtn);
  new Modal();

  swiperSliders(headerSlider, productsSlider)

})