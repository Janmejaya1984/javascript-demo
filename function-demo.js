function myFunction(num1,num2){ 
    num3=num1*num2;
    return num3
}

function add(arr){
    sum =0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log("Result is:"+sum);
}

add([100,200,300,456,657,987]);

//You are calling/invoking the function
console.log(myFunction(100,543));

console.log(myFunction(600,743));