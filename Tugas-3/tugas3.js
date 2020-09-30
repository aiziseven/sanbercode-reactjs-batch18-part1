function proper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(`\n${kataPertama} ${proper(kataKedua)} ${kataKetiga} ${kataKeempat.toUpperCase()}\n`);

// soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat));

// soal 3
var kalimat = 'wah javascript itu keren sekali';

var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14); // do your own! 
var kataKetiga = kalimat.substring(15, 18); // do your own! 
var kataKeempat = kalimat.substring(19, 24) // do your own! 
var kataKelima = kalimat.substring(25, 31) // do your own! 

console.log('\nKata Pertama: ' + kataPertama);
console.log('Kata Kedua: ' + kataKedua);
console.log('Kata Ketiga: ' + kataKetiga);
console.log('Kata Keempat: ' + kataKeempat);
console.log('Kata Kelima: ' + kataKelima);

// soal 4
var nilai = 200;
var indeks = '';

if (nilai >= 80) {
    indeks = 'A';
} else if (nilai >= 70 && nilai < 80) {
    indeks = 'B';
} else if (nilai >= 60 && nilai < 70) {
    indeks = 'C';
} else if (nilai >= 50 && nilai < 60) {
    indeks = 'D';
} else if (nilai < 50) {
    indeks = 'E';
}
console.log(`\nIndeks Nilai: ${indeks}`);

// soal 5
var tanggal = 12;
var bulan = 7;
var tahun = 1995;

switch (bulan) {
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default:
        tanggal = 'Bulan';
        bulan = 'Tidak';
        tahun = 'Ditemukan';
        break;

}

console.log(`\n${tanggal} ${bulan} ${tahun}`);