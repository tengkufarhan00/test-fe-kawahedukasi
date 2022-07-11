// Pertanyaan Ke - 3
// Membuat pyramid loop dengan *
// Masukan jumlah row yang diinginkan ke dalam parameter

// Output 1
function pyramidLtr(row) {
    var output = "";
    for (i=0;i < row;i++) {
      for (j=0;j <= i; j++) {
        output += "*";
      }
     console.log(output)
     output = '';
    }
    return "output 1"
  }
  console.log("Soal ke - 3 : " + pyramidLtr(6))
  
  //output 2
  function pyramidRtl(row) {
    var output = ""; 
    for (i=0;i < row;i++) {
      for (j=row ;j > i + 1; j--) {
        output += " ";
      }
     for (k=0;k<=i;k++) {
       output += "*";
     }
     
     output += "\n";
    }
    console.log(output)
    return "output 2"
  }
  console.log("Soal ke - 3 : " + pyramidRtl(6))