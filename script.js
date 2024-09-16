"use strict";

const accordions = document.querySelectorAll(".accordion");
const getIcon = (accordion) => accordion.querySelector("i");

//  Cycle through accordions with arrow keys
document.addEventListener("keydown", (event) => {
    const tabIndex = document.activeElement.tabIndex - 1;
    const indexable = document.querySelectorAll("[tabindex]");
    if (event.key === "ArrowUp") {
        if (tabIndex) indexable[tabIndex - 1].focus();
    }
    else if (event.key === "ArrowDown") {
        if (tabIndex !== indexable.length - 1) indexable[tabIndex + 1].focus();
    }
})


// Hide and show accordions - only one can be open at a time
const hide = (accordion) => {
    const icon = getIcon(accordion);
    accordion.classList.add("hide");
    accordion.querySelector(".accordion-head").classList.add("hide");
    accordion.querySelector("p").classList.add("hide");
    icon.classList.remove("fa-circle-minus");
    icon.classList.add("fa-circle-plus");
    icon.classList.remove("dark");
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

// So only one can be open at a time
const deactivateAll = () => {
    accordions.forEach((accordion) => {
        if (!accordion.classList.contains("hide")) {
            hide(accordion);
        }
    });
}

// Callback for both click and enter key pressed
const activate = (accordion) => {
    const isOpen = !accordion.classList.contains("hide");
    deactivateAll();
    if (!isOpen) show(accordion);
}


// Add handlers for the accordions
accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => activate(accordion));
    accordion.addEventListener("keydown", (event) => {
        if (event.key === "Enter") activate(accordion);
    });
})
