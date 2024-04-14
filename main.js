let playerBot = Math.floor(Math.random() * 3)
let playerUser = +prompt('0) Камень\n1) Бумага\n2) Ножницы')

console.log(playerBot);
console.log(playerUser);

if (playerBot === playerUser) {
    console.log('Ничья');
}

else if (playerBot === 0 && playerUser === 1) {
    console.log('Игрок выиграл');
}

else if (playerBot === 0 && playerUser === 2) {
    console.log('Бот выиграл');
}

else if (playerBot === 1 && playerUser === 0) {
    console.log('Бот выиграл');
}

else if (playerBot === 1 && playerUser === 2) {
    console.log('Игрок выиграл');
}

else if  (playerBot === 2 && playerUser === 0) {
    console.log('Игрок выиграл');
}

else if (playerBot === 2 && playerUser === 1) {
    console.log('Бот выиграл');
}

else if (playerUser === 0 && playerBot === 1) {
    console.log('Игрок выиграл');
}

else if (playerUser === 0 && playerBot === 2) {
    console.log('Бот выиграл');
}

else if (playerUser === 1 && playerBot === 0) {
    console.log('Бот выиграл');
}

else if (playerUser === 1 && playerBot === 2) {
    console.log('Игрок выиграл');
}

else if  (playerUser === 2 && playerBot === 0) {
    console.log('Игрок выиграл');
}

else if (playerUser === 2 && playerBot === 1) {
    console.log('Бот выиграл');
}