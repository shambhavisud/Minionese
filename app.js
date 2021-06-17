let btnTranslate = document.querySelector("#btn-translate");
console.log(btnTranslate);
//   console.log("input", txtInput.value);
let clickHandler = () => {
  console.log("clicked!");
};
// function clickHandler() {
//   console.log("clicked!");
//   console.log("input", txtInput.value);
// }

btnTranslate.addEventListener("click", clickHandler);
