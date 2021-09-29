var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/chef.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    console.log("Error occurred: ", error);
    alert("Something is wrong. Try again later.")
}

function clickHandler() {
    var inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translated_text = json.contents.translated;
            outputDiv.innerText = translated_text;
        })
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)