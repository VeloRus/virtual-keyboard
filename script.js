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

// keybord
const keybord = document.createElement('div');
keybord.className = 'keybord';
main.append(keybord);

//information
const information = document.createElement('div');
information.className = 'information';
main.append(information);