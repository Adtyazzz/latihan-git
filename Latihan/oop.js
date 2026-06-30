// Contoh 1
// class Car{
//     constructor(brand,factory) {
//         this.brand = brand
//         this.factory = factory
//         this.sound = 'tittttttttttttt'
//     }
// }
// var mobil = new Car ("inova", "toyota")
// console.log(mobil)


//Contoh 2
// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return "I have a " + this.carname;
//     }
// }
// mycar = new Car("ford");
// console.log(mycar.present())

//Contoh 3
// class Car {
//     constructor(brand, mobilku) {
//         this.carname = brand;
//         this.mobilku = mobilku;

//     }
//     present(x){
//         return x + ", I have a " + this.carname
//     }
// }
// mycar = new Car("Ford");
// mobilku = new Car("Toyota")
// console.log(mycar.present("Hello"))
// console.log(mobilku.present("Hello"))


//Getters dan Setters
// class Car{
//     constructor(brand) {
//         this._carname = brand;
//     }
//     get carname() {
//         return this._carname;
//     }
//     set carname(x) {
//         this._carname = x;
//     }
// }
// mycar = new Car("Ford");
// mycar.carname = "Volvo";
// console.log(mycar.carname)


//Inheritance / Pewarisan
class Person{
    constructor(nama) {
        this.name = nama
        this.mapel = ""
    }

    get personMapel(){
        return this.mapel
    }
    set personMapel(mapel){
        this.mapel = mapel
    }
    berjalan(){
        return "Prok Prok Prok"
    }
}

class School extends Person{
    constructor(name){
        super(name)
        this.school = ""
    }
}

var guru = new School("Pak Budi")
guru.personMapel = "Matematika"
guru.school = "SMAN 14 Samarinda"
console.log(guru)
console.log(guru.berjalan())