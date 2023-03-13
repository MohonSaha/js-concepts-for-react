const nayok = {
    name: 'Mohon Saha',
    job: 'film',
    age: 21,
    address: 'Dhaka',
    25 : 'movie Number is 25'
}

// Dot notation: 
const objName = nayok.name;

// Bracket Notation: 
const objName2 = nayok['name'];     // Rule-1

const nayokName = 'name';               // Rule-3
const objName3 = nayok[nayokName];



// If the property name of an object is numaric then bracket notation is mandatory
const movie = nayok[25];