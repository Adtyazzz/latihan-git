// contoh object
var identitas = [
     {
    nama : "Muhammad Aditya Dwi Saputra",
    warnaKulit : "Sawo Matang",
    jenisKelamin : "Laki-Laki",
    tinggiBadan : 168,
    beratBadan : 85,
    usia : 21,
},
{
    nama : "Andra",
    warnaKulit : "Sawo Matang",
    jenisKelamin : "Laki-Laki",
    tinggiBadan : 170,
    beratBadan : 60,
    usia : 18,
},
{
    nama : "Mba yul",
    warnaKulit : "Putih",
    jenisKelamin : "Perempuan",
    tinggiBadan : 170,
    beratBadan : 60,
    usia : 23,
}
]
console.log(identitas[0].nama)
console.log(identitas[1].nama)

// object array iteration

// method .forEach 
identitas.forEach(function(item){
    console.log(item.warnaKulit)
})

// // method .map
// var warnaKulit = identitas.map(function(item){
//     return item.warnaKulit
// })
// console.log(warnaKulit)

// method .filter
var fillterJenisKelamin = identitas.filter(function(item){
    return item.jenisKelamin == "Perempuan"
})
console.log(fillterJenisKelamin)

var usia = identitas.filter(function(item){
    return item.usia > 20
})
console.log(usia)