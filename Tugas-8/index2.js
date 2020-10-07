var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise 
let i = 0;

function reading(sisaWaktu) {
    readBooksPromise(sisaWaktu, books[i])
        .then((response) => {
            if (response > 0) {
                i++;
                reading(response);
            }
        })
        .catch((err) => {
            return err;
        })
}

reading(10000);