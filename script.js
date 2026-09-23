const money_input = document.getElementById("money-input");
const crazy_input = document.getElementById("crazy-input");
const money_button = document.getElementById("money-input-button");
const crazy_button = document.getElementById("crazy-input-button");

money_button.addEventListener("click", () => {
    money_input.style.display="block";
    crazy_input.style.display="none";
});

crazy_button.addEventListener("click", () => {
    money_input.style.display="none";
    crazy_input.style.display="flex";
});