// Define the message to be displayed
const message = `These numbers are the even numbers in the given range`;
// Get DOM elements
const userInput = document.querySelector("#userInput");
const form = document.querySelector("form");
const userNumber = document.querySelector("#givenNumber");
const evenNumbersList = document.querySelector("#evenNumbers");

// Function to validate the given number
const validateGivenNumber = (number) => {
    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return false;
    } else if (number === '') {
        alert("Please enter a number to check.");
        return false;
    }
    return true;
};

// Function to find even numbers in the given range
const findEvenNumbers = (number) => {
    const evenNumbers = [];
    for (let i = 2; i <= number; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }
    return evenNumbers;
};

// Function to display the user's input and the even numbers
const displayEvenNumbers = (number) => {
    if (!validateGivenNumber(number)) {
        return;
    }
    userNumber.innerText = `You entered: ${number}`;

    // Check if evenNumbersList exists before setting its innerText
    const evenNumbersList = document.querySelector("#evenNumbers");
    if (evenNumbersList) {
        evenNumbersList.innerText = "";

        const evenNumbers = findEvenNumbers(number);
        evenNumbersList.classList.add("evenNumbers");
        evenNumbersList.innerText = `${message}\n${evenNumbers.join(', ')}`;
    }
};

// Event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputValue = Number(userInput.value);
    displayEvenNumbers(inputValue);
    userInput.value = '';
});