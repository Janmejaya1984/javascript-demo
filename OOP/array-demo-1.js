placesToVisit = ["Paris", "New York", "Switzerland","India","Greece","Italy"];
console.log(placesToVisit[0]);
// Paris
console.log(placesToVisit[placesToVisit.length-1]);
// Switzerland

console.log(typeof placesToVisit);

for(let i=0;i<placesToVisit.length;i++){
    console.log(placesToVisit[i].toUpperCase());
}
let j=placesToVisit.length-1;
console.log("---Reverse Order-----");
while(j>=0){
    console.log(placesToVisit[j].toUpperCase());
    j--;
}
