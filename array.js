// contoh penggunaan array
var angka = [2, 5, 1, 3, 4]
// console.log(angka)
console.log(angka[2])


// kumpulan method pada array

// // method length
console.log(angka.length)

// method push
console.log("sebelum push " + angka)
angka.push(9)
console.log("setelah push " + angka)

//method pop
console.log("sebelum pop " + angka)
angka.pop()
console.log("setelah pop " + angka)

// method unshift
console.log("sebelum unshift " + angka)
angka.unshift(7)
console.log("setelah unshift " + angka)

// method shift
console.log("sebelum shift " + angka)
angka.shift(7)
console.log("setelah shift " + angka)


var peserta = ["Andra", "Taufik", "Adit", "Debi"]
// console.log(peserta)

//method join
console.log("sebelum join")
console.log(peserta)

console.log("setelah join")
console.log(peserta.join("-"))

// split
var nama = "Muhammad Aditya Dwi Saputra"
console.log("sebelum split")
console.log(nama)
console.log("sesudah split")
console.log(nama.split(" ").length)

// method sort
console.log("sebelum di sort")
console.log(peserta)
console.log("setelah di sort")
console.log(peserta.sort())
console.log("setelah di reverse")
console.log(peserta.reverse())


//method slice
console.log("sebelum slice")
console.log(peserta)
console.log("setelah slice")
var newPeserta = peserta.slice(2,4)
console.log(newPeserta)
console.log(peserta)

// method splice
console.log("sebelum splice")
console.log(peserta)
var newPeserta = peserta.splice(2,0,"heldi","huda")
console.log(peserta)