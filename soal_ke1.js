// Pertanyaan Ke - 1 
// Cara menemukan angka yang paling banyak muncul dalam array

// Contoh array yang diberikan
    var data1 = [1, 1, 1, 2, 2, 4, 1, 1 ];
    var data2 = [2, 1, 2, 2, 2, 8, 1, 1 ];
    var data3 = [3, 3, 3, 3, 2, 4, 1, 1 ];


function findMostNumber(data) {
var count = {};
var jumlah = 0;
var hasil;
  for (var num in data) {
    count[data[num]] = (count[data[num]] || 0) + 1;
    if(count[data[num]] > jumlah) {
      jumlah = count[data[num]];
      hasil = data[num]
    }
  }
  return "total data paling banyak keluar adalah " + hasil + " dengan jumlah " + jumlah
}

console.log("Data ke-1 : " + findMostNumber(data1));
console.log("Data ke-2 : " + findMostNumber(data2));
console.log("Data ke-3 : " + findMostNumber(data3));
