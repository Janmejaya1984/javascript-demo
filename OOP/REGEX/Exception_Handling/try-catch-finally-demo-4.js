function validateName(name) {
    try {
        if (name.match(/[\$\#]/)) {// error occurs here
            /* All the below lines of try do not run 
                as error was thrown in previous line*/
                console.log("Inside Try:If Block");
            return false;
        }
        else {
            console.log("Inside Try:Else Block");
            return true;
        }
    }
    catch (error) {
            console.log("Error Occurred in Catch Block");
    }
    finally{
        console.log("Finally Block: Error Occurs or not, This block exceutes.  Cleaning up resources");
    }
}
validateName("josh$");
