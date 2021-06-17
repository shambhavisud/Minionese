let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-input");
console.log(textInput);
//   console.log("input", txtInput.value);
let clickHandler = () => {
  console.log("clicked!");
  console.log(textInput.value);
};

btnTranslate.addEventListener("click", clickHandler);
