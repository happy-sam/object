const car = {
    brand: "audi",
    color: "czerwony",
    year: 2015
}

let getCarValue = function (e) {

    return car[e]

}

console.log(getCarValue("brand"));