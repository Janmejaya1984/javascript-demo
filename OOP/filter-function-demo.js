placesToVisit= ["Paris", "New York",  "Switzerland"];
function filterPlaces(val) {
    if (val.length > 10) {
        return true;
    }
}
filteredPlaces = placesToVisit.filter(_=>_.length>5);
console.log(filteredPlaces );
