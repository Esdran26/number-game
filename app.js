//Variables
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

//Classes
class Number {
    constructor(inputNumber, randomNumber) {
        this.inputNumber = inputNumber;
        this.randomNumber = randomNumber;
    }
}
class UI {
    //Methods
    getInputNumber(number) {
        if(number.inputNumber <= 0 || number.inputNumber > 100) {
            this.showMessage('Invalid number!', '#ff7675');
        }
        else {
            this.showMessage('The number you are looking for is from 1 to 100', '#222f3e');
            this.showMessageAttempts();
        }
        this.resetForm();
    }
    showMessage(message, color) {
        const small = document.getElementById('numberHelp');
        small.textContent = message;
        small.style.color = color;
    }
    showMessageAttempts() {
        const divAttempts = document.getElementById('attempts');
        const divChangeSubmit = document.getElementById('changeSubmit');
        attempts = attempts - 1;
        if(attempts === 4 ||  attempts === 5) {
            divAttempts.innerHTML = `
                <p style="color: #10ac84; font-size: 20px; font-weight: bold;" class="mt-2">Number of attempts: ${attempts}</p>
            `;
        }
        else if(attempts === 3) {
            divAttempts.innerHTML = `
                <p style="color: #ff9f43; font-size: 20px; font-weight: bold;" class="mt-2">Number of attempts: ${attempts}</p>
            `;
        }
        else if(attempts === 1 || attempts === 2) {
            divAttempts.innerHTML = `
                <p style="color: #ee5253; font-size: 20px; font-weight: bold;" class="mt-2">Number of attempts: ${attempts}</p>
            `;
        }
        else if(attempts === 0) {
            divAttempts.innerHTML = `
                <p style="color: #222f3e; font-size: 20px; font-weight: bold;" class="mt-2">Game Over</p>
            `;
            const inputNumber = document.getElementById('inputNumber');
            inputNumber.disabled = 'true';
            const buttonSubmit = document.getElementById('buttonSubmit').remove();
            divChangeSubmit.innerHTML = `
                <input class="btn btn-primary btn-block" type="button" value="TRY AGAIN!" onclick="location.reload()"/>
            `;
        }
    }
    showMessageServer(number) {
        const divBackground = document.getElementById('background');
        console.log(number);
        if(number.inputNumber <= 0 || number.inputNumber > 100){
            divBackground.innerHTML = `
                <p class="result">Invalid Number!</p>
            `;
        }
        else if(number.inputNumber < number.randomNumber) {
            divBackground.innerHTML = `
                <p class="result">The number must be greater</p>
            `;
        }
    }
    resetForm() {
        document.getElementById('submitForm').reset();
    }
}

//Event Listeners and functions
const submitNumber = document.getElementById('submitForm');
submitNumber.addEventListener('submit', (e) => {
    const valueNumber = document.getElementById('inputNumber').value;
    const number = new Number(valueNumber, randomNumber);
    const ui = new UI();
    ui.getInputNumber(number);
    ui.showMessageServer(number);
    
    e.preventDefault();
});