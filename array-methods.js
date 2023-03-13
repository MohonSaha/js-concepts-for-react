const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 2000, brand: 'rolex', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
];

// Make a new array to take the brand name all the products:
// Map return the result for next uses
const brands = products.map(product => product.brand);
console.log(brands);


// foreach return the result for next uses
// products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))

// Multiline foreach:
// products.forEach(product => {
//     console.log(product)
// })



// Filter:
const cheap = products.filter(product => product.price < 3000);
// console.log(cheap);


// Show the product that containing the word n :
const nameWordN = products.filter(product => product.name.includes('n'));
// console.log(nameWordN);


// Find: 
const special = products.find(product => product.name.includes('n'));
console.log(special);