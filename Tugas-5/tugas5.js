// soal 1
function halo() {
    return 'Halo Sanbers!\n';
}
console.log('\nsoal 1');
console.log(halo()) // "Halo Sanbers!" 

// soal 2
function kalikan(a, b) {
    var hasil = parseFloat(a) * parseFloat(b);
    return hasil;
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log('soal 2');
console.log(hasilKali) // 48

// soal 3
function introduce(name, age, address, hobby) {
    return 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!\n';
}


var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log('\nsoal 3');
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"

// soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var objectPeserta = {
    'nama': arrayDaftarPeserta[0],
    'jenisKelamin': arrayDaftarPeserta[1],
    'hobi': arrayDaftarPeserta[2],
    'tahunLahir': arrayDaftarPeserta[3],
};

console.log('soal 4');
console.log(objectPeserta);

// soal 5
var buah = [
    {
        nama: 'strawberry',
        warna: 'merah',
        adaBijinya: 'tidak',
        harga: 9000
    },
    {
        nama: 'jeruk',
        warna: 'oranye',
        adaBijinya: 'ada',
        harga: 8000
    },
    {
        nama: 'Semangka',
        warna: 'Hijau & Merah',
        adaBijinya: 'ada',
        harga: 10000
    },
    {
        nama: 'Pisang',
        warna: 'Kuning',
        adaBijinya: 'tidak',
        harga: 5000
    },
];
console.log('\nsoal 5');
console.log(buah[0]);

// soal 6
var dataFilm = []

function addFilm(nama, durasi, genre, tahun) {
    var objectFilm = {
        'nama': nama,
        'durasi': durasi,
        'genre': genre,
        'tahun': tahun,
    }
    dataFilm.push(objectFilm);
}
addFilm('Kuntilanak', '2 tahun', 'science', 2020);
addFilm('Azrax', 'seumur hidup', 'kids', 2013);
console.log('\nsoal 6');
console.log(dataFilm);