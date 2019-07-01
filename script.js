// const Car = function (brand, year, color) {
//     this.brand = brand;
//     this.year = year;
//     this.color = color;
//     this.property = function (e) {
//         console.log(`Klucz to ${e}, a jego wartość to ${this[e]}`)
//     }
// }

// let audi = new Car("audi", 2010, "czerwony");

// audi.property("year")


const car = {
    brand: "audi",
    color: "czerwony",
    year: 2015
}

let getCarValue = function (e) {

    if (e == "brand") {
        return car.brand;
    } else if (e == "color") {
        return car.color;
    } else if (e == "year") {
        return car.year;
    }
}

console.log(getCarValue("color"));

// można by zamiast if-a zostosować switch