const _ = require('lodash');

// найти слова котороые встречаются наибольшее количество раз

const poem = "Верните в моду доброту и звук речей без мата. Верните душам чистоту Без пьяного умата. Верните в моду детский смех вдоль улиц и площадок, Без телефонных всех помех и интернетных вкладок.";
const top5Words = _.flow([
_.toLower, _.words, _.countBy, _.toPairs,_.partial(_.orderBy, _, 1, 'desc'),_.partial( _.take,_, 5), _.fromPairs
]);
console.log(top5Words(poem));


//____________results_________________
// { 'верните': 3, 'и': 3, 'без': 3, 'в': 2, 'моду': 2 }