// Pertanyaan Ke - 1 
// Cara menemukan angka yang paling banyak muncul dalam array

// Contoh Array
var data1 = [2,3,2,2,5,7,5,2,2,2,5,5];

function findMostNumber(data) {
var count = {};
var jumlah = 0;
var filtered = [];
var hasil;
  for (var num in data) {
    count[data[num]] = (count[data[num]] || 0) + 1;
    if(count[data[num]] > jumlah) {
      jumlah = count[data[num]];
      hasil = data[num]
      filtered.push(data[num])
    }
  }
  return "total data paling banyak keluar adalah " + hasil + " dengan jumlah " + jumlah
}
console.log("Soal ke-1 : " + findMostNumber(data1));
