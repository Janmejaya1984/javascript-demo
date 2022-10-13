placesToVisit= ["Paris", "New York",  "Switzerland"];
function display_uppercase(place) {
    return place.toUpperCase();
}
placesUpparCase = placesToVisit.map(display_uppercase);
console.log(placesUpparCase);
