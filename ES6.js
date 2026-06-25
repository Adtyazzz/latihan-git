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
const HitungLuasPersegi = (sisi) => {
    var sisi = 6

    const luas = (s) => {
        return s * s 
    }
    const keliling = (s) => {
        return 4 * s
    }
    console.log("Luas persegi: ", luas(sisi))
    console.log("keliling keliling: ", keliling(sisi))
}
HitungLuasPersegi(6)

console.log("---------------------------")

const HitungLingkaran = (radius) => {
    const pi = 22/7

    const luas = (r) => {
        return pi * r * r
    }
    const keliling = (r) => {
        return 2 * r * r
    }

    console.log("Luas lingkaran: ", luas(radius))
    console.log("keliling lingkaran: ", keliling(radius))
}
HitungLingkaran(5)