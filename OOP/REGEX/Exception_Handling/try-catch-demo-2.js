function validateName(name) {
    try {
       
        if (name.Match(/[\$\#]/)) {// error occurs here
            /* All the below lines of try do not run 
                as error was thrown in previous line*/
                console.log("Inside Try: Inside If");
            return false;
        }
        else {
            console.log("Inside Try: Inside Else");
            return true;
        }

    }
    catch (error) {
        // code for Handling error
        console.log("Error Happens! Control is in catch block now!!!!");
        
        console.log(error.message);
    }
}
validateName("Josh$")
