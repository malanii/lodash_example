const _ = require('lodash');


function divide(a, b) {
    return a / b
}
// _________partial__________________________
const half = _.partialRight(divide, 2);
// const half = _.partial(divide, _, 2);
// указываем что 2 это самый правый параметр
console.log(half(14));
//___________________________________________

//___________curring_________________________
const curriedDevide = _.curry(divide);
console.log(curriedDevide(10)(2));
console.log(curriedDevide(10,2));
//___________________________________________

//____________flow______________________________
const notFlatArray = [1,2,3,[4,5]];
const sum =_.flow([_.concat, _.flattenDeep, _.sum ]);
console.log(sum(notFlatArray));
// _.flattenDeep - избавляемся от вложенности в массиве