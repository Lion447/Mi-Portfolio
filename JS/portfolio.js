// Botton volver arriba
const btn = document.querySelector(".scroll-up-btn");

if (btn) {
    btn.addEventListener("click", () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}