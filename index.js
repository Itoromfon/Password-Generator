const letters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
const special = ["~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?",
"/"]
let inputOne = document.getElementById("input-one")
let inputTwo = document.getElementById("input-two")
let pswLengthEl = document.getElementById("password-lengths")
let numbersEl = document.getElementById("numbers")
let symbolsEl = document.getElementById("symbols")

function randomPassword() {
    inputOne.textContent = ""
    inputTwo.textContent = ""
    const passwordLength = pswLengthEl.value;
    const nums = numbersEl.checked ? [...numbers] : [];
    const syms = symbolsEl.checked ? [...special] : [];
    const availableChars = [...letters, ...nums, ...syms];
    // console.log(availableChars)
    let generatePasswordOne = "";
    let generatePasswordTwo = "";
    for (let i = 0; i < passwordLength; i++) {
        generatePasswordOne += availableChars[ Math.floor( Math.random() * availableChars.length ) ]
        generatePasswordTwo += availableChars[ Math.floor( Math.random() * availableChars.length ) ]
        // console.log(generatePasswordTwo)  
    }
    inputOne.textContent += generatePasswordOne
    inputTwo.textContent += generatePasswordTwo
}

function copyPasswordOne() {
    const cb = navigator.clipboard;
    const copyTextOne = document.querySelector("#input-one");
    cb.writeText(copyTextOne.textContent).then(() => alert("Text copied"));
}

function copyPasswordTwo() {
    const cb = navigator.clipboard;
    const copyTextTwo = document.querySelector("#input-two");
    cb.writeText(copyTextTwo.textContent).then(() => alert("Text copied"));
}

function resetPassword() {
    inputOne.textContent = ""
    inputTwo.textContent = ""
}

































































































