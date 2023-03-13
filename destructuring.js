// 1) Array dstructuring:

const num = [90, 60];


// const [x, y] = [80, 38];    (Rule: 1)
// const [x, y] = num;         (Rule: 2)


function boxify (num1, num2){
    const nums = [num1, num2];
    return nums;
}

// const [first, second] = boxify(90, 34);   (Rule: 3)



const nayok = {
    name: 'sakib khan',
    age: 38,
    movies: ['Dhakar mastan', 'king khan']
}

// const [firstMovies, secondMovies] = nayok.movies;    (Rule: 4)






// Object destructuring: 

const nayeka = {
    name: 'samantha',
    age: 27,
    region: 'south'
};

// const {region, name, age} = nayeka;      (Rule: 1)
// const {name, job} = {name: 'Mohon Saha', job: "web-developer"}   (Rule: 2)




const employee = {
    ide: 'Vs code',
    designation: 'developer',
    machine: 'mac',
    languages: [htmi, css, javascript],
    specification: {
        heigth: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 5000,
            brand: 'rolex'
        }
    }
}
