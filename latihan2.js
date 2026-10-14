/* Sistem kategori film berdasarkan usia
   => menggunakan data usia keluarga
2 film: Jumbo dan Losmen Melati

Ketentuan usia:
1. Jumbo: tidak ada batasan usia
2. Losmen Melati: usia >= 17 tahun

*/

let data = [
  [1278030092100156, "A", "Laki-laki", 40],
  [1278030092100157, "B", "Perempuan", 30],
  [1278030092100146, "C", "Laki-laki", 16],
  [1278030082100177, "D", "Laki-laki", 8],
];

let age = data[0][3];
let selectMovie = "Losmen Melati";
let losmenMelati = age >= 17;

let result;

// Jika salah satu keluarga memilih film Jumbo,
if(selectMovie === "Jumbo") {
  
  if(age>=5) {
    result = `Usia ${age} dapat menonton ${selectMovie}`; // Usia untuk film Jumbo minimal adalah 5 tahun.

  
  } else {
    result = `Usia ${age} tidak dapat menonton Jumbo`; // Jika tidak memenuhi syarat, maka tidak bisa menonton Jumbo.
  }

  
// Jika memilih film Losmen Melati,
} else if(selectMovie === "Losmen Melati") {

  
  if(age >= 17) {
    result = `Usia ${age} dapat menonton ${selectMovie}`; // usia minimal 17 tahun

  
  } else {
    result = `Usia ${age} tidak dapat menonton ${selectMovie}`; // jika usia di bawah 17 tahun, maka tidak dapat menonton Losmen Melati.
  }

} else {
  result = "Terjadi kesalahan, harap coba lagi!";
}

console.log(result);