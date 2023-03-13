

const addToLocalStorage = () =>{
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    if(id && value ){
        localStorage.setItem(id, value)
    }
    idInput.value = '';
    valueInput.value = '';
}



// If we want to set an array in local storage we have to use JSON.stringify method.

localStorage.setItem('numbers', JSON.stringify([88, 90, 70, 89]));


// If we want to set an object in local storage we have to use JSON.stringify method.

const pen = {
    color: 'black',
    brand: 'Matadoor',
    peice: 20
}

localStorage.setItem('pen', JSON.stringify(pen));



// The way to get data from local storage: 
const storedPen = localStorage.getItem('pen');
const penObj = JSON.parse(storedPen);
console.log(penObj);