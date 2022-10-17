function check(value) {
    console.log(value);
  }
  function getTrip() {
    setTimeout(function() {
      return "Let's go to Trip";
    }, 0);
  }
  function getValue(){
    return "returning value syncronously";
  }
  value = getTrip();
  check(value);
  // undefined

  check("Good Morning");
  check(getValue());
  