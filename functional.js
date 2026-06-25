// recursive
function countDown(number){
    console.log(number);

    var newNumber = number - 1;
    if (newNumber > 0){
        countDown(newNumber);
    }
}
// countDown(5)

// first class function
function HitungLingkaran(radius){
    var pi = 22/7

    function luas (r){
        return pi * r * r
    }
    function keliling (r) {
        return 2 * r * r
    }

    console.log("Luas lingkaran: ", luas(radius))
    console.log("keliling lingkaran: ", keliling(radius))
}
HitungLingkaran(5)

function HitungLuasPersegi(sisi){
    var sisi = 6

    function luas (s){
        return s * s 
    }
    function keliling (s){
        return 4 * s
    }
    console.log("Luas persegi: ", luas(sisi))
    console.log("keliling keliling: ", keliling(sisi))
}
HitungLuasPersegi(6)


// Currying Function

function tambah(a,b){
    return a + b
}
console.log(tambah(2,5))


function tambah (a){
    return function (b){
        return a + b
    }
}
console.log(tambah(2)(5))


