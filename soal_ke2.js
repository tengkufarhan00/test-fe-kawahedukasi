// Pertanyaan Ke - 2
// Memvalidasi input agar sesuai permintaan
// Syarat Input tidak boleh mengandung angka
// Masukan salah satu contoh string dibawah ke dalam parameter function yang ada di console log(filterString(parameter))


// contoh string tanpa angka
var str = "hello amir kamu ngapain"

// contoh string dengan angka
var strNum = "hello amir24 kamu ngapain"

function filterString(input) {
  var reg = /(\d+)/
  var matcher = input.match(reg);
  
 return (matcher) ? "sistem kami menolak untuk inputan berisi angka " + matcher[0] : input;
 
}
console.log("Soal ke-2 : " + filterString(strNum))
