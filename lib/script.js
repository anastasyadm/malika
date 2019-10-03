var link = document.querySelector(".buy-btn");
var form = document.querySelector(".popup-form");
var checkin = form.querySelector("[name=name-user]");
var checkout = form.querySelector("[name=name-email]");

link.addEventListener ("click", function(event) {
event.preventDefault();
form.classList.toggle("popup-form-show");
checkin.focus();
form.classList.remove("popup-form-error");
});

window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (form.classList.contains("popup-form-show")) {
form.classList.remove("popup-form-show");
form.classList.remove("popup-form-error");
}
}
});

form.addEventListener("submit", function(event) {
if (!checkin.value || !checkout.value) {
event.preventDefault();
form.classList.add("popup-form-error");
}
});