var navMobile = document.getElementById("navMobile");
var openBtn = document.getElementById("burgerBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
    navMobile.classList.remove("dnone");
});

closeBtn.addEventListener("click", () => {
    navMobile.classList.add("dnone");
});

