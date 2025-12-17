document.addEventListener("DOMContentLoaded", () => {

    const transition = document.querySelector(".page-transition");

    /* ====== BUKA SETELAH 1 FRAME ====== */
    requestAnimationFrame(() => {
        transition.classList.add("uncover");
    });

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", e => {

            const href = link.getAttribute("href");
            if (!href || href.startsWith("#")) return;

            e.preventDefault();

            transition.className = "page-transition";
            transition.offsetHeight; // 🔒 force reflow

            if (href.includes("diagnosa")) {
                transition.classList.add("cover-right");
            } else {
                transition.classList.add("cover-left");
            }

            setTimeout(() => {
                window.location.href = href;
            }, 600);
        });
    });
});