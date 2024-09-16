"use strict";

const accordions = document.querySelectorAll(".accordion");

const getIcon = (accordion) => accordion.querySelector("i");

const hide = (accordion) => {
    const icon = getIcon(accordion);
    accordion.classList.add("hide");
    accordion.querySelector(".accordion-head").classList.add("hide");
    accordion.querySelector("p").classList.add("hide");
    icon.classList.remove("fa-circle-minus");
    icon.classList.add("fa-circle-plus");
    icon.classList.remove("dark");
}

const deactivateAll = () => {
    accordions.forEach((accordion) => {
        if (!accordion.classList.contains("hide")) {
            hide(accordion);
        }
    });
}

const show = (accordion) => {
    const icon = getIcon(accordion);
    accordion.classList.remove("hide");
    accordion.querySelector(".accordion-head").classList.remove("hide");
    accordion.querySelector("p").classList.remove("hide");
    icon.classList.remove("fa-circle-plus");
    icon.classList.add("fa-circle-minus");
    icon.classList.add("dark");
}




accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        const isOpen = !accordion.classList.contains("hide");
        deactivateAll();
        if (!isOpen) show(accordion);
    });
})
