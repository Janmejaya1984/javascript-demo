function getTrip(location) {
    return new Promise(function(resolve, reject) {
      if (location == "ooty") {
          resolve("Trip to " + location);
      } else {
        reject(Error("Invalid Destination.."));
      }
    });
  }
  getTrip("ooty").then(function(data){
    console.log("The promise is resolved");
    console.log(data);
  },function(error){
    console.log("The promise get rejected");
    console.log(error);
  });
 
  getTrip("Kashmir").then(function(data){
    console.log("The promise is resolved");
    console.log(data);
  }).catch(function(error){
    console.log("The promise get rejected");
    console.log(error.message);
  });

  /*
  ,function(error){
    console.log("The promise get rejected");
    console.log(error.message);
  }
  */
  