calculateCost = (ticketPrice, noOfPerson)=>{
    noOfPerson= ticketPrice * noOfPerson;
    return noOfPerson;
}
console.log(calculateCost(500, 2));
// 1000

trip = () => "Let's go to trip."
console.log(trip());
// Let's go to trip.
trip1 = place => "Trip to " + place;
console.log(trip1("Paris"));
// Trip to Paris

trip2 = _ => "Trip to " + _;
console.log(trip2("Greece"));
// Trip to Paris
