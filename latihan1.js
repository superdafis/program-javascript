/* Program: data keluarga (orang tua laki-laki, orang tua perempuan, anak ke-1. anak ke-2)
  1. NIK
  2. Nama
  3. Jenis kelamin
  4. Usia
*/

let data = [
  [1278030092100156, "A", "Laki-laki", 40],
  [1278030092100157, "B", "Perempuan", 30],
  [1278030092100146, "C", "Laki-laki", 16],
  [1278030082100177, "D", "Laki-laki", 8],
];

console.log(
  `Orang tua laki-laki: \nNIK: ${data[0][0]} \nNama: ${data[0][1]} \nJenis Kelamin: ${data[0][2]} \nUsia: ${data[0][3]} \n\n`,
);
console.log(
  `Orang tua Perempuan: \nNIK: ${data[1][0]} \nNama: ${data[1][1]} \nJenis Kelamin: ${data[1][2]} \nUsia: ${data[1][3]} \n\n`,
);
console.log(
  `Anak pertama: \nNIK: ${data[2][0]} \nNama: ${data[2][1]} \nJenis Kelamin: ${data[2][2]} \nUsia: ${data[2][3]} \n\n`,
);
console.log(
  `Anak kedua: \nNIK: ${data[3][0]} \nNama: ${data[3][1]} \nJenis Kelamin: ${data[3][2]} \nUsia: ${data[3][3]}`,
);
