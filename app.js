const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const characters = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]


let password1Display = document.querySelector('#first-pass');
let password2Display = document.querySelector('#second-pass');
let checkboxNumbers = document.querySelector('#numbers');
let checkboxCharacters = document.querySelector('#characters');
let passwordDiv1 = document.querySelector('#first-pass');
let passwordDiv2 = document.querySelector('#second-pass');
let passwordLength = document.querySelector('#password_len');

let newPasswordLen = 0;
let newCombination = []
let password1 = ""
let password2 = ""


function generatePassword() {
    if(passwordLength.value > 20){
        alert("Maximum length is 20");
        newPasswordLen = 0;
    }else if(passwordLength.value <= 20) {
        newPasswordLen = passwordLength.value
    }

    if(checkboxNumbers.checked === true && checkboxCharacters.checked === true){
        newCombination = alphabets.concat(numbers, characters)
    } else if(!checkboxNumbers.checked &&  checkboxCharacters.checked ) {
        newCombination = alphabets.concat(characters)
    } else if(checkboxNumbers.checked &&  !checkboxCharacters.checked) {
        newCombination = alphabets.concat(numbers)
    } else {
        newCombination = alphabets
    }
    render();
}

function render() {
    for(let i = 0; i < newPasswordLen; i ++){
        var item = newCombination[Math.floor(Math.random()*newCombination.length)];
        password1 += item;
        password1Display.textContent = password1;
    }
    for(let i = 0; i < newPasswordLen; i ++){
        var item = newCombination[Math.floor(Math.random()*newCombination.length)];
        password2 += item;
        password2Display.textContent = password2;
    }
    password1 = '';
    password2 = '';
}   