// npm used

const _ = require('lodash');

const items =[ 1,[2,3,[4,8,[5,[6,[7]]]]]]
const newItems =_.flattenDeep(items)
const testItems=[a,b,c];
const newtestItems=_.flattenDeep(testItems)
console.log(newItems);
console.log(newtestItems);