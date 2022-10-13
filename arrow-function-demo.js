function add(x,y){
    result = x+y;
    return result;
}

sum = add(100,200);
console.log("The result is: "+sum);

sum_arrow = (x,y)=>x+y;
console.log("Result Through an arrow function"+sum_arrow(100,200));

uc = arg => arg.toUpperCase();
console.log(uc("welcome to js world!"));

welcome = ()=>console.log("Welcome!!!");
welcome();
