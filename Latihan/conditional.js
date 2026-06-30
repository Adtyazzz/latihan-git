// digunakan dalam program untuk mengambil keputusan dari kemungkinan benar (True) atau salah (False) terhadap beberapa kondisi

// if (true){
//     console.log("kode program dijlaankan")
// }

// if (false){
//     console.log("kode program tidak dijalankan")
// }

// console.log("===================================")

// var mood = "happy"
// if (mood == "happy"){
//     console.log("saya sedang bahagia hari ini")
// }

// console.log("===================================")



// // if else  

// var umur = 40;
// if (umur > 25){
//     console.log("sudah tua")
// } else{
//     console.log("masi muda")
// }


// // if else if

// var minimarketStatus = "close"
// var minuteRemainingToOpen = 5

// if(minimarketStatus == "open"){
//     console.log("saya akan membeli telur dan buah")
// } else if (minuteRemainingToOpen <= 5){
//     console.log("mini market buka sebentar lagi, saya tungguin")
// } else {
//     console.log("minimarket tutup, syaa pulang lagi")
// }



// nested if
// var umur = 35
// if(umur >= 17){
//     console.log("sudah memiliki KTP")
//     if(umur > 20){
//         console.log("umur kurang dari 20 tahun")
//     } else if(umur > 30){
//         console.log("usia diantara 20-30 tahun")
//     } else if (umur > 40){
//         console.log("usia diantara 30-40 tahun")
//     } else{
//         console.log("sudah berumur")
//     }
// } else {
//     console.log("belum memiliki KTP")
// }


var warna = "biru"

switch(warna){
    case "merah" : {
        console.log("warna merah")
        break
    }
    case "biru" : {
        console.log("warna biru")
        break
    }
    case "kuning" : {
        console.log("warna kuning")
        break
    }
    case "hijau" : {
        console.log("warna hijau")
        break
    }
    default : {
        console.log("warna yang anda pilih tidak ada")
    }
}