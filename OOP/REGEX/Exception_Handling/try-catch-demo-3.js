function validateName(name) {
    try {
        if (name.Match(/[\$\#]/)) {// error occurs here
            /* All the below lines of try do not run 
                as error was thrown in previous line*/
            return false;
        }
        else {
            return true;
        }
    }
    catch (error) {
        if (error instanceof TypeError)
            console.log("Type Error Occurred");
        else if (error instanceof RangeError)
            console.log("Range Error Occurred");
        else if (error instanceof SyntaxError)
            console.log("Syntax Error Occurred");
        else
            console.log("Some other Error Occurred");
    }
}
validateName("Josh$");
