function validateName(name){
    if(name.Match(/[\$\#]/)){
        console.log("Input is invalid");
        return false;
    }
    else {
        console.log("Input is valid");
        return true;
    }
}
function validate(){
validateName("Hello");
}
validate()
