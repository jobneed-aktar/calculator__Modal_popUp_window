const openModalBtn = document.getElementById("modal__open");
const modal = document.getElementById("my__modal");
const closeModalBtn = document.getElementById("close__modal_btn");
const overlay = document.querySelector(".modal__overlay");

openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

overlay.addEventListener("click", () => {
    modal.classList.add("hidden");
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        modal.classList.add("hidden");
    }
});
