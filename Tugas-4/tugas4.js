// soal 1
var x = 2;
console.log('\nsoal 1');
console.log('LOOPING PERTAMA');
while (x <= 20) {
    console.log(`${x} - I love coding`);
    x = x + 2;
}

var y = x - 2;
console.log('\nLOOPING KEDUA');
while (y >= 2) {
    console.log(`${y} - I will become a frontend developer`);
    y = y - 2;
}

// soal 2
console.log('\nsoal 2');
for (var z = 1; z <= 20; z++) {
    var even = z % 2;
    var three = z % 3;

    switch (three) {
        case 0:
            if (even != 0) {
                console.log(`${z} - I Love Coding`);
            } else {
                console.log(`${z} - Berkualitas`);
            }
            break;
        default:
            if (even != 0) {
                console.log(`${z} - Santai`);
            } else {
                console.log(`${z} - Berkualitas`);
            }
    }
}

// soal 3
console.log('\nsoal 3');

for (var a = '#'; a.length <= 7; a = a + '#') {
    console.log(a);
}

// soal 4
console.log('\nsoal 4');
var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(' '));

// soal 5
console.log('\nsoal 5');
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
for (var c = 0; c < daftarBuah.length; c++) {
    console.log(daftarBuah.sort()[c]);
}