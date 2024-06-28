import { HashMap } from './modules_classes/hash-map.js';
import { HashSet } from './modules_classes/hash-set.js';

// practice with HashMap

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
test.set('jacket', 'pink');
test.set('kite', 'blue');
test.set('moon', 'silver');

let array = test.entries();
console.log(array);
console.log(array.length);


// practice with HashSet

const testSet = new HashSet();

testSet.set('apple');
testSet.set('banana');
testSet.set('carrot');
testSet.set('dog');
testSet.set('elephant');
testSet.set('frog');
testSet.set('grape');
testSet.set('hat');
testSet.set('ice cream');
testSet.set('jacket');
testSet.set('kite');
testSet.set('lion');
testSet.set('jacket');
testSet.set('kite');
testSet.set('moon');

let arrayKeys = testSet.entries();
console.log(arrayKeys);
console.log(arrayKeys.length);




