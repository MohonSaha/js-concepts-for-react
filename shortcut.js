// Ternary operator: 
const money = 90;
const place = 'Dhaka';
let food1 = money > 100 ? 'beriyani' : 'cai biscuts';

// Multiple condition ternary operator: 
let dringJuice = (money > 80 && place === 'Dhaka') ? 'lassi' : 'filter water';


// Number to string conversion:
const num1 = 52;
const num1Str = num1 + '';
// console.log(num1Str);



// String to number without parse:
const input = '560';
const inputNum = +input;
console.log(inputNum);



// Shortcut to check true or false:
let isActivve = true;
const showUsers = () => console.log('Dispklay USers');
const hideUsers = () => console.log('Hide USers');
isActivve ? showUsers() : hideUsers();  // Call the function basis on true or false.

// Use && operator: if the left side is true then the right side will be executed. 
isActivve && showUsers();

// Use || operator: if the left side is flase then the right side will be executed
isActivve || hideUsers();

// toggle boolean :
isActivve = !isActivve;