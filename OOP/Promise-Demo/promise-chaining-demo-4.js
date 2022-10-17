function bookFlight(airline) {
    return new Promise(function (resolve, reject) {
        if (airline == "AirIndia") {
            setTimeout(resolve(5600), 2000);
        } else {
            reject(Error(airline +"Flight can not be booked"))
        }
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}
/*bookFlight("AirIndia")
    .then(function (flightData) { return bookHotel(flightData) })
    .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
    .catch(e => console.log(e.message))*/

async function bookAFlight(flightName){
    try{
    var flightPrice = await bookFlight(flightName);
    console.log(flightPrice>0?"Flight booked":"There is some error!");
    
    var totalPrice = await bookHotel(flightPrice);
    console.log("Hotel is booked and the price is :"+totalPrice);
    }catch(err){
        console.log("ERRor Happens !!!"+err.message);
    }
}
bookAFlight("AirIndia");

