function bookFlight() {
    return new Promise(function (resolve) {
        setTimeout(resolve(5600), 2000);
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}
async function getTotal(){
var flightPrice = await bookFlight();
var totalPrice = await bookHotel(flightPrice);
console.log("The total price is: "+totalPrice);
}
getTotal()
