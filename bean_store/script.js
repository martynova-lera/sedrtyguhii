const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");

const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");

minRange.addEventListener("input", () => {
    if (+minRange.value > +maxRange.value) {
        minRange.value = maxRange.value;
    }
    minPrice.textContent = minRange.value + " ₽";
});

maxRange.addEventListener("input", () => {
    if (+maxRange.value < +minRange.value) {
        maxRange.value = minRange.value;
    }
    maxPrice.textContent = maxRange.value + " ₽";
});