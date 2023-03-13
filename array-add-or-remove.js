

const products = [
    {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 2000, brand: 'rolex', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}
];

const addNewItem = {name: 'web-cam', price: 700, brand: 'hp', color: 'white'};

//Cop product array and then add new products:
const newProducts = [...products, addNewItem];
// console.log(newProducts);

// Create a new array without one specific item:
// Remove an item from an array means create a new array without that item.
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);