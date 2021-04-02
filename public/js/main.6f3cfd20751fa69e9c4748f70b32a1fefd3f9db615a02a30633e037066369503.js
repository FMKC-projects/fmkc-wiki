(() => {
  // C:/Users/OLIVER~1/AppData/Local/Temp/hugo_cache/modules/filecache/modules/pkg/mod/bitbucket.org/olligranlund/hugo-theme@v0.0.0-20201210120456-c5841ff238d3/assets/js/components/menu.js
  function menu() {
    let html = document.querySelector("html");
    let body = document.querySelector("#body");
    let menu3 = document.querySelector("#site-header");
    let menu_items = menu3.querySelector(".c-menu__parts__menu--items");
    let hamburger = menu3.querySelector(".c-menu__parts__hamburger");
    let blurred = void 0;
    let focused = void 0;
    const init = () => {
      menu3.addEventListener("click", function(event) {
        if (event.target.getAttribute("id") == "c-menu-toggle") {
          event.preventDefault();
          if (body.classList.contains("c-menu--open")) {
            closeMenu();
          } else {
            openMenu();
          }
        }
        console.log(event.target);
        if (event.target.getAttribute("id") == "c-menu-bg") {
          if (body.classList.contains("c-menu--open")) {
            closeMenu();
          }
        }
      }, true);
      document.addEventListener("blur", function(event) {
        "use strict";
        if (body.classList.contains("c-menu--open")) {
          blurred = event.target;
        }
      }, true);
      document.addEventListener("focus", function(event) {
        "use strict";
        if (body.classList.contains("c-menu--open")) {
          focused = event.target;
          if (blurred && focused) {
            if ((blurred.classList.contains("c-menu__menu-item") || blurred.classList.contains("c-menu__parts__hamburger")) && (focused.classList.contains("c-menu__menu-item") || focused.classList.contains("c-menu__parts__hamburger"))) {
            } else {
              closeMenu();
              setTimeout(function() {
                focused.scrollIntoView({block: "center"});
              }, 10);
            }
          }
        }
      }, true);
    };
    const openMenu = () => {
      body.style.top = `-${window.scrollY}px`;
      body.style.position = "fixed";
      body.classList.add("c-menu--open");
      hamburger.setAttribute("aria-expanded", true);
      menu_items.setAttribute("aria-hidden", false);
      menu_items.querySelectorAll("a").forEach(function(link) {
        link.setAttribute("tabindex", "0");
      });
    };
    const closeMenu = () => {
      html.style.scrollBehavior = "auto";
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1, "auto");
      html.style.scrollBehavior = "";
      body.classList.remove("c-menu--open");
      hamburger.setAttribute("aria-expanded", false);
      menu_items.setAttribute("aria-hidden", true);
      menu_items.querySelectorAll("a").forEach(function(link) {
        link.setAttribute("tabindex", "-1");
      });
    };
    init();
  }
  var menu_default = menu;

  // C:/Users/OLIVER~1/AppData/Local/Temp/hugo_cache/modules/filecache/modules/pkg/mod/bitbucket.org/olligranlund/hugo-theme@v0.0.0-20201210120456-c5841ff238d3/assets/js/components/lightbox.js
  function lightbox() {
    let html = document.querySelector("html");
    let body = document.querySelector("#body");
    let lightbox3 = document.querySelector("#lightbox");
    let lightbox_overlay = lightbox3.querySelector("#lightbox-overlay");
    let lightbox_image_wrapper = lightbox3.querySelector(".c-lightbox__image-wrapper");
    let lightbox_image = lightbox3.querySelector("#lightbox-image");
    let lightbox_close = lightbox3.querySelector("#lightbox-close");
    const init = () => {
      if (lightbox3 && lightbox_image && lightbox_close) {
        document.addEventListener("click", function(event) {
          if (body.classList.contains("c-lightbox--animating-in") || body.classList.contains("c-lightbox--animating-out")) {
            return;
          }
          if (event.target.hasAttribute("data-lightbox")) {
            event.preventDefault();
            openLightbox(event.target);
          }
          if (event.target.hasAttribute("data-lightbox-close")) {
            event.preventDefault();
            closeLightbox();
          }
        }, true);
        lightbox3.style.removeProperty("display");
      }
    };
    const openLightbox = (target) => {
      body.style.top = `-${window.scrollY}px`;
      body.style.position = "fixed";
      let image_src = target.getAttribute("image_src");
      lightbox_image.src = image_src;
      body.classList.add("c-lightbox--animating-in");
      setTimeout(function() {
        body.classList.add("c-lightbox--visible");
        body.classList.remove("c-lightbox--animating-in");
        const img_height = lightbox_image.height;
        const img_width = lightbox_image.width;
        lightbox_image_wrapper.style.height = `${img_height}px`;
        lightbox_image_wrapper.style.width = `${img_width}px`;
        lightbox_close.classList.add("c-lightbox__close--visible");
      }, 500);
    };
    const closeLightbox = () => {
      html.style.scrollBehavior = "auto";
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1, "auto");
      html.style.scrollBehavior = "";
      body.classList.add("c-lightbox--animating-out");
      body.classList.remove("c-lightbox--visible");
      lightbox_close.classList.remove("c-lightbox__close--visible");
      setTimeout(function() {
        body.classList.remove("c-lightbox--animating-out");
        lightbox_image.src = "";
      }, 250);
      setTimeout(function() {
        lightbox_image_wrapper.style.height = "";
        lightbox_image_wrapper.style.width = "";
      }, 500);
    };
    init();
  }
  var lightbox_default = lightbox;

  // main.js
  window.addEventListener("DOMContentLoaded", () => {
    menu_default();
    lightbox_default();
  });
})();
