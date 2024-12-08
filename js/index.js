'use strict';

const firstModalName = prompt("Ваше им'я?");

const secondModalAge= prompt('Ваш вік?');

if (secondModalAge === null) {
    alert('Добре, бувай');
}
else if (
    !secondModalAge.trim() || isNaN(secondModalAge)
    || secondModalAge <= 0 || secondModalAge >= 80
) {
    alert('Вибачте, невідповідний вік :(');
}
else {
    const userAge = parseInt(secondModalAge);
    alert(`Вам всього то ${userAge}`);
}

const thirdModalEmail = prompt('Ваш email please');

console.log(firstModalName);
console.log(secondModalAge);
console.log(thirdModalEmail);