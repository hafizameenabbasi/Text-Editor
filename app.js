let inputText = document.querySelector("#inputText");
let colorPicker = document.getElementById("colorpanel");

function boldf1() {
  inputText.style.fontWeight = "bold";
  inputText.style.color = "#000";
}
function italicf2() {
  inputText.style.fontStyle = "italic";
  inputText.style.color = "#000";
}
function leftf3() {
  inputText.style.textAlign = "left";
  inputText.style.color = "#000";
}
function center() {
  inputText.style.textAlign = "center";
  inputText.style.color = "#000";
}
function right() {
  inputText.style.textAlign = "right";
  inputText.style.color = "#000";
}
function upperCase() {
  inputText.style.textTransform = "uppercase";
  inputText.style.color = "#000";
}
function lowerCase() {
  inputText.style.textTransform = "lowercase";
  inputText.style.color = "#000";
}
function capitalize() {
  inputText.style.textTransform = "capitalize";
  inputText.style.color = "#000";
}
function clearText() {
  inputText.value = "";
}
colorPicker.addEventListener("input", () => {
  inputText.style.color = colorPicker.value;
});
