document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById("close-btn");
    const menuLinks = document.querySelectorAll(".mobile-menu-links a");

    hamburgerBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });
    });

});





