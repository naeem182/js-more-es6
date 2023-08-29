
/* map ==> loops through each element of the array and do the operation that 
you passed in the call back function and hold the result from each operation in an array and finally returns you the array
*/


const num = [1, 2, 3, 4]
function double(n) {
    return n * 2
}
console.log(num)
// console.log(num.map(double))
// //arrow fun
// const cube = n => n * n * n
// console.log(num.map(cube))
// //console.log(num.map(n => n * 2))//1 line


//push
const doubled = [];
for (const n of num) {
    const double = n * 2;
    doubled.push(double)
}

console.log(doubled)

//more ex

const numbers = [12, 10, 8, 15, 7];

const doubl = numbers.map(num => num * 2)
// console.log(doubl)
const fiveBonus = numbers.map(num => num + 5);
const halves = numbers.map(num => num / 2);
console.log(halves)

const friends = ['Tom', 'John', 'Micheal', 'Oliver'];

const lengths = friends.map(frnd => frnd.length)
console.log(lengths)
const firstLetter = friends.map(friend => friend[0])
console.log(firstLetter);
