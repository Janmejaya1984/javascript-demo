function welcome(){
    return "Good afternoon all!!!";
}
console.log(welcome());
function showDate(){
    return new Date();
}
console.log(showDate());
function square(value){
    return value*value;
}
console.log(square(67));
function getNames(){
    return ["Sachin","Ganguly","Sehwag","Laxman"];
}
arr = getNames();
for(i=0;i<arr.length;i++){
    console.log(arr[i].toUpperCase());
}
function getDay(){
    var day = function calculateDay(digit){
        switch(digit){
            case 1:console.log("sunday");
            break;
            case 2:console.log("monday");
            break;
            case 3:console.log("tuesday");
            break;
            case 4:console.log("wednesday");
            break;
            case 5:console.log("thrusday");
            break;
            case 6:console.log("saturday");
            break;
            default: console.log("Invalid Day!!!");
        }
    }
    return day;
}

func = getDay();
func(3);