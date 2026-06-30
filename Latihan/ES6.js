// penggunaan let
// let nama = "john"

// if(true)
// {
//     let nama = "doe"
//     console.log(nama)
// }
// console.log(nama)

// penggnaan const
// const pi = 3.14

// pi = 22/7
// console.log(pi)


// function biasa
// const nama = "Adit"
// function tampilkan(nama){
//     console.log("hallo", nama);
// }
// tampilkan(nama);

// //anonymous function
// var fungsiPerkalian = function(angkaPertama, angkaKedua){
//     return angkaPertama * angkaKedua
// }
// console.log(fungsiPerkalian(5,3))




// arrow function
// const HitungLuasPersegi = (sisi) => {

//     const luas = (s) => {
//         return s * s 
//     }
//     const keliling = (s) => {
//         return 4 * s
//     }
//     console.log("Luas persegi: ", luas(sisi))
//     console.log("keliling keliling: ", keliling(sisi))
// }
// HitungLuasPersegi(6)

// console.log("---------------------------")

// const HitungLingkaran = (radius) => {
//     const pi = 22/7

//     const luas = (r) => {
//         return pi * r * r
//     }
//     const keliling = (r) => {
//         return 2 * r * r
//     }

//     console.log("Luas lingkaran: ", luas(radius))
//     console.log("keliling lingkaran: ", keliling(radius))
// }
// HitungLingkaran(5)



// let namaDepan = "Muhammad Adiya"
// let namaBelakang = "Dwi Saputra"
// console.log(`Ini Nama depan ku ${namaDepan} dan ini nama belakang ku ${namaBelakang}`)

// Enhaced object
// let nama = "aditya"
// let person = {
//     nama : nama,
//     umur : 23,
// }
// console.log(person)


// Destructuring Array
let number = [1,5,6,7,8]

// let number1 = number[0]
// let number2 = number[1]
// let number3 = number[2]
// let number4 = number[3]
// let number5 = number[4]

// contoh 1
// let [num1, num2, num3, num4, lastNum] = number
// console.log(lastNum)

// contoh 2
let [num1, , , , lastNum] = number
// console.log(lastNum)

// Destructuring object
// let names = "aditya"
// let person = {
//     nama : names,
//     umur : 23,
//     tinggi : 170
// }
// console.log(person)

// let {nama, umur, tinggi} = person
// console.log(nama)


// Rest Parameter + Spread Operator

let footbalPlayer = ["Messi", "Ronaldo", "Mbappe", "Mbappe", "Halland", "Neymar"]

let [argentina, portugal, france, ...restPlayerLain] = footbalPlayer
console.log(restPlayerLain)
console.log(restPlayerLain[0])
console.log(restPlayerLain[1])

// contoh rest parameter object
let names = "aditya"
let person = {
    nama : names,
    umur : 23,
    tinggi : 170
}
console.log(person)

let {nama, ...restPerson} = person
console.log(nama)
console.log(restPerson)

// Spread Operator
let buah = ["apel", "mangga", "strawbery", "jeruk"]
buah = ["durian", ...buah, "anggur"]
console.log(buah)

let tumbler = {
    merk : "MR.DIY",
    ukuran : "1L",
    harga : 80000
}
tumbler.warna = "hitam"
tumbler = {...tumbler, bahan:"plastik", bentuk:"bulat"}
console.log(tumbler)
