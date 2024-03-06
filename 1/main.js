const keyElement = document.querySelector('#key');
const newGameButton = document.querySelector('#newGameButton');

const keys = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];

let currentKeyIndex;

function startNewGame() {
    currentKeyIndex = 0;
    updateCurrentKey();
    newGameButton.style.display = 'none';
}

function updateCurrentKey() {
    const currentKey = keys[currentKeyIndex];
    keyElement.textContent = currentKey;
}

function handleKeyDown(event) {
    const pressedKey = event.key.toUpperCase();
    
    if (pressedKey === keys[currentKeyIndex]) {
        currentKeyIndex++;
        
        if (currentKeyIndex === keys.length) {
            alert('Ви перемогли! Натисніть "OK", щоб почати нову гру.');
            keyElement.textContent = '';
            newGameButton.style.display = 'block';
        } else {
            updateCurrentKey();
        }
    } else {
        
        // alert('Помилка! Натискайте правильну клавішу.');
        PNotify.alert({
            title: "Помилка",
            text: "Натискайте правильну клавішу.",
            width: "auto",
            type: "error",
            stack: stack.bottomright
        });
    }
}

document.addEventListener('keydown', handleKeyDown);

document.addEventListener('keypress', function (event) {
    event.preventDefault();
});

newGameButton.addEventListener('click', startNewGame);

startNewGame();