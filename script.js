//body + main
const body = document.querySelector('body');
const main = document.createElement('main');
main.className = 'main';
body.prepend(main);

//textarea
const textarea = document.createElement('textarea');
textarea.className = 'textarea';
main.prepend(textarea);
textarea.focus();

//keyboard
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
main.append(keyboard);

//information
const information = document.createElement('div');
information.className = 'information';
main.append(information);




let keyboardEng = [
  ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace"],
  ["tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "del"],
  ["caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "enter"],
  ["shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "up", "shift"],
  ["ctrl", "win", "alt", "space", "alt", "left", "down", "right"]
];

let keyboardRus = [
  ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "backspace"],
  ["tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "del"],
  ["caps lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter"],
  ["shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "up", "shift"],
  ["ctrl", "win", "alt", "space", "alt", "left", "down", "right"]
];

for (let i = 0; i < keyboardEng.length; i++){	
	let keyboardRow = document.createElement('div');
	keyboardRow.className = "keyboard-row";
	keyboard.append(keyboardRow);

for(let j = 0; j < keyboardEng[i].length; j++){
	let button = document.createElement('button');
	button.innerHTML = keyboardEng[i][j];
	button.className = keyboardEng[i][j] + "-btn" + ' btn';
	keyboardRow.append(button);
};
}

document.onkeydown = function(event) {
  textarea.innerHTML = event;
}

let buttons = document.querySelectorAll('.btn');

 buttons.forEach(item => item.addEventListener('click', function() {
    if (item.classList.contains('space-btn')) {
      textarea.innerHTML += ' ';
    } else if (item.classList.contains('enter-btn')) {
      textarea.innerHTML += '\n'
    } else if (item.classList.contains('backspace-btn')) {
      textarea.value.slice(0, -1); 
    } else 
     textarea.innerHTML += item.innerText;
  }
));