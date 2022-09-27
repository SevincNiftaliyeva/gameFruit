

//----------------------------------------------------------------------------------------------------------

const wordList = [
    {
        word: "armud",
        isare: "meyvə"
    },
    {
         word: "alma",
       isare: "meyvə"
    },
    {
        word: "banan",
        isare: "meyvə"
    },
    {
        word: "kivi",
        isare: "meyvə"
    },
    {
    word: "yemis",
    isare: "programming language"
}
]



var inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".isare span"),
guessLeft = document.querySelector(".texmin span"),
wrongLetter = document.querySelector(".wrong-letter span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");
var word, maxtexmin;
var yanlis = [];
var dogru = []
function randomWord() {
   var ranItem = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranItem.word;
    maxtexmin = word.length;
    dogru = []; 
    yanlis = [];
    hintTag.innerText = ranItem.isare;
    guessLeft.innerText = maxtexmin;
    wrongLetter.innerText = yanlis;
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();
function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !yanlis.includes(` ${key}`) && !dogru.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    dogru += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxtexmin--;
            yanlis.push(` ${key}`);
        }
        guessLeft.innerText = maxtexmin;
        wrongLetter.innerText = yanlis;
    }
    typingInput.value = "";
    setTimeout(() => {
        if(dogru.length === word.length) {
            alert(`Tebrik edirem sizi`);
            return randomWord();
        } else if(maxtexmin < 1) {
            alert("Oyun bitdi:(");
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}
resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());