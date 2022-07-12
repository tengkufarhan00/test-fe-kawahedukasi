// Pertanyaan Ke - 2
// Memvalidasi input agar sesuai permintaan
// Syarat Input tidak boleh mengandung angka
// Masukan salah satu contoh string dibawah ke dalam parameter function yang ada di console log(filterString(parameter))


// contoh input yang diberikan
    var input1 = "hallo jesika24 selamat datang!";
    var input2 = "hallo anggun selamat datang!";
    var input3 = "hallo ** selamat datang!";
    var input4 = "hallo Mariage889120! selamat datang!";


function filterString(input) {
  var reg = /(\d+)/
  var matcher = input.match(reg);
  
  return (matcher) ? "Sistem kami menolak untuk inputan berisi angka " + matcher[0] : "Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input;
 
}

console.log("Input ke-1 : " + filterString(input1));
console.log("Input ke-2 : " + filterString(input2));
console.log("Input ke-3 : " + filterString(input3));
console.log("Input ke-4 : " + filterString(input4));
