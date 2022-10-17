function getData(callback1){
 setTimeout(function(){
    value = callback1("bapun00@gmail.com",getDetails);
 },2000);
}

function getUserId(emailId,callback2){
    setTimeout(function(){
       getDetails("abc1234");
    },2000);
}

function getDetails(userId){
   setTimeout(function(){console.log( {name:'Janmejaya',address:'Hyderabad'});},1500);
}

getData(getUserId);