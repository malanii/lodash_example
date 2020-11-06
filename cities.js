const _ = require('lodash');
const data = require('./data');

//найти 3 страны у которых наибольшее количество городов с населением больше 3млн

const output = _(data)
    .filter(city => city.population > 3000000)
    .countBy(c => c.country)
    .toPairs()
    .map(c => _.zipObject(["country", 'cities'], c))
    .orderBy(c => c.cities, 'desc')
    .take(3)
    .value();
console.log(output);

//___________gte______________

const greaterThan = _.curry(_.gte);
const populationGreaterThan = num => _.conforms({population: greaterThan(num)});
const zip = _.curry(_.zipObject);

const out = _(data)
    .filter(populationGreaterThan(5000000))
    .countBy('country')
    .toPairs()
    .map(zip(["country", 'cities']))
    .orderBy('cities', 'desc')
    .take(3)
    .value();

console.log(out);

// __________________results__________________
// [
//     { country: 'USA', cities: 3 },
//     { country: 'Germany', cities: 2 },
//     { country: 'Spain', cities: 2 }
// ]