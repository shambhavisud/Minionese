let btnTranslate = document.querySelector("#btn-translate");
let textInput = document.querySelector("#text-input");
let OutputDiv = document.querySelector("#output");
//   console.log("input", txtInput.value);
let clickHandler = () => {
  OutputDiv.innerText = "jsjjdj " + textInput.value;
};

btnTranslate.addEventListener("click", clickHandler);
