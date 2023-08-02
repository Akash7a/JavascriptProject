const userInput = document.querySelector("#userInput");
const resultContainer = document.querySelector("#result");
const convertBtn = document.querySelector("#convert-btn");
const clearBtn = document.querySelector("#clear-btn");
const showResult = document.querySelector("#show-result");
// 1 miles === 0.62137119miles
let mile1 = 0.62137119;


const converKmToMiles = () => {
    let inputValue = userInput.value;
    let result = inputValue * mile1;
    resultContainer.value = result;
    showResult.innerText = `Result:${inputValue} Kilometer = ${result} miles`
    if (inputValue === '') {
        alert("Please enter a number!");
        return
    }
    const clearEverything = () => {
        userInput.value = '';
        result = '';
        resultContainer.value = '';
    }
    clearBtn.addEventListener("click", clearEverything)
}

convertBtn.addEventListener("click", converKmToMiles)