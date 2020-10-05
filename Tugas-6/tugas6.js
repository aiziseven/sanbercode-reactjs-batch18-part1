// soal 1
const luasLingkaran = (r) => {
    let hasilLuasLingkaran = parseFloat(3.14) * (parseFloat(r) * parseFloat(r));
    return hasilLuasLingkaran;
}

const kelilingLingkaran = (diameter) => {
    let hasilKelilingLingkaran = parseFloat(3.14) * parseFloat(diameter);
    return hasilKelilingLingkaran;
}

console.log('\nsoal 1');

console.log('Luas Lingkaran:');
console.log(luasLingkaran(5));

console.log('Keliling Lingkaran:');
console.log(kelilingLingkaran(100));

// soal 2
let kalimat = '';
const addWord = (word) => {
    kalimat = `${word}`;
    return kalimat;
}
console.log('\nsoal 2');
console.log(addWord('saya'), addWord('adalah'), addWord('seorang'), addWord('frontend'), addWord('developer'));

// soal 3
const newFunction = literal = (firstName, lastName) => {
    return {
        firstName, lastName, fullName: () => {
            console.log(`${firstName} ${lastName}`);
        }
    };
}

//Driver Code
console.log('\nsoal 3');
newFunction("William", "Imoh").fullName()

// soal 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation, spell } = newObject;
// Driver code
console.log('\nsoal 4');
console.log(firstName, lastName, destination, occupation, spell)

// soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log('\nsoal 5');
console.log(combined)