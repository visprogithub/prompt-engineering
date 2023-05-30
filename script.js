(function () {
  class Menu {
    constructor() {
      this.bodyOverflow = document.body.style.overflow;
    }

    init() {
      this.getMenuElementsAndAddEvents();
      this.getMenuElementsAndAddEventsByDataAttrs("type");
      this.getMenuElementsAndAddEventsByDataAttrs("role");
      this.getNavbarElementsAndAddEventsByDataThqAttrs();
    }

    getMenuElementsAndAddEventsByDataAttrs(dataAttr) {
      const allHeaders = teleport.getAllElementsByDataAttribute("role", "Header");

      allHeaders.forEach((header) => {
        const burgerBtn = teleport.getElByDataAttribute(dataAttr, "BurgerMenu", header);
        const mobileMenu = teleport.getElByDataAttribute(dataAttr, "MobileMenu", header);
        const closeBtn = teleport.getElByDataAttribute(dataAttr, "CloseMobileMenu", header);

        if (!burgerBtn || !mobileMenu || !closeBtn) {
          return;
        }

        burgerBtn.addEventListener("click", () => {
          mobileMenu.classList.add("teleport-show");
        });

        closeBtn.addEventListener("click", () => {
          mobileMenu.classList.remove("teleport-show");
        });
      });
    }

    getNavbarElementsAndAddEventsByDataThqAttrs() {
      const allNavbars = teleport.getAllElementsByDataAttribute("thq", "thq-navbar");

      allNavbars.forEach((navbar) => {
        const burgerBtn = teleport.getElByDataAttribute("thq", "thq-burger-menu", navbar);
        const mobileMenu = teleport.getElByDataAttribute("thq", "thq-mobile-menu", navbar);
        const closeBtn = teleport.getElByDataAttribute("thq", "thq-close-menu", navbar);

        if (!burgerBtn || !mobileMenu || !closeBtn) {
          return;
        }

        const checkSameLinkClicked = (event) => {
          if (!event) {
            return;
          }

          let currentElement = event.target;

          while (currentElement !== document.body && !currentElement.href) {
            currentElement = currentElement.parentNode;
          }

          if (!currentElement.href) {
            return;
          }

          if (!mobileMenu) {
            return;
          }

          if (currentElement.href) {
            document.body.style.overflow = this.bodyOverflow;
          }

          if (currentElement.pathname === window.location.pathname) {
            mobileMenu.classList.remove("teleport-show");
            mobileMenu.classList.remove("thq-show");
            mobileMenu.classList.remove("thq-translate-to-default");
          }

          window.removeEventListener("click", checkSameLinkClicked);
        };

        burgerBtn.addEventListener("click", () => {
          window.addEventListener("click", checkSameLinkClicked);
          document.body.style.overflow = "hidden";

          mobileMenu.classList.add("teleport-show");
          mobileMenu.classList.add("thq-show");
          mobileMenu.classList.add("thq-translate-to-default");
        });

        closeBtn.addEventListener("click", () => {
          document.body.style.overflow = this.bodyOverflow;

          mobileMenu.classList.remove("teleport-show");
          mobileMenu.classList.remove("thq-show");
          mobileMenu.classList.remove("thq-translate-to-default");
        });
      });
    }

    getMenuElementsAndAddEvents() {
      const menuElements = teleport.getAllElByClass("teleport-menu-burger");

      if (menuElements.length === 0) {
        teleport.log("No teleport-menu-burger items found");
        return;
      }

      menuElements.forEach((burgerMenuElement) => {
        const mobileMenuElement = burgerMenuElement.nextElementSibling?.classList.contains("teleport-menu-mobile")
          ? burgerMenuElement
        window.addEventListener("DOMContentLoaded", function() {
            var headings = document.querySelectorAll(".home-heading01, .home-heading02, .home-heading03");
            headings.forEach(function(heading) {
                heading.addEventListener("click", function() {
                    var text = this.nextElementSibling;
                    if (text.style.display === "none") {
                        text.style.display = "block";
                    } else {
                        text.style.display = "none";
                    }
                });
            });
            
            if (window.innerWidth < 600) {
                window.addEventListener("scroll", function() {
                    var headings = document.querySelectorAll(".home-heading01, .home-heading02, .home-heading03");
                    headings.forEach(function(heading) {
                        var text = heading.nextElementSibling;
                        var rect = heading.getBoundingClientRect();
                        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                            text.style.display = "block";
                        } else {
                            text.style.display = "none";
                        }
                    });
                });
            }
        });
