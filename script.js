const Car = function (brand, year, color) {
    this.brand = brand;
    this.year = year;
    this.color = color;
    this.property = function (e) {
        console.log(`Klucz to ${e}, a jego wartość to ${this[e]}`)
    }
}

let audi = new Car("audi", 2010, "czerwony");

audi.property("year")