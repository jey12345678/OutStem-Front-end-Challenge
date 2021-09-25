//Created because need to find a way to display the errors.

export default function validateInfo(values){

    let errors = {}

    var dropDownMenu = document.getElementById("ddlViewBy");

    //If nothing is typed in username.

    if(!values.name.trim()){
        errors.name = "Name is required!"
    }
    if(values.whereFound === ""){
        errors.whereFound = "No option is selected!"
    }

    //If nothing is typed in email.

    if(!values.email){
        errors.email = "Email is required!"

    }
    
    else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email address is invalid"
    }

    

    return errors;
}