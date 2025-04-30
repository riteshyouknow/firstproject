document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("input");

    // Add placeholder animation effect
    let placeholderTexts = [
        "Search for restaurant...",
        "Search for cuisine...",
        "Search for a dish..."
    ];
    let index = 0;

    setInterval(() => {
        searchInput.setAttribute("placeholder", placeholderTexts[index]);
        index = (index + 1) % placeholderTexts.length;
    }, 2000);

    // Header color change on scroll
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "rgba(255, 0, 0, 1)";
        } else {
            header.style.background = "rgba(255, 0, 0, 0.9)";
        }
    });
});
