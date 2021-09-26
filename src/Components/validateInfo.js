//Created because need to find a way to display the errors.

export default function validateInfo(values,vaccinatedChecked,termsChecked,wedChecked,thursChecked,friChecked,satChecked){

    let errors = {}

    //If nothing is typed in username.

    if(!values.name.trim()){
        errors.name = "Name is required!"
    }
    console.log(values.whereFound);
    if(values.whereFound === "Select Option"){
        errors.whereFound = "No option is selected!"
    }
    if(values.firstChoice === "-- Select Your First Team --"){
        errors.firstChoice = "Select your first team!"
    }
    if(values.secondChoice === "-- Select Your Second Team --"){
        errors.secondChoice = "Select your second team!"
    }
    if(values.thirdChoice === "-- Select Your Third Team --"){
        errors.thirdChoice = "Select your third team!"
    }
    if(vaccinatedChecked === false){
        errors.vaccineCheck = "Not Checked!"
    }
    if(termsChecked === false){
        errors.termsCheck = "Not Checked!"
    }
    if(wedChecked === false && thursChecked === false && friChecked === false && satChecked === false){
        errors.availability = "Choose at least one day for availability!"
    }

    if(values.firstChoice === values.secondChoice || values.firstChoice === values.thirdChoice || values.secondChoice === values.thirdChoice){
        errors.choices = "Selected duplicate teams!"
    }

    //If nothing is typed in email.

    if(!values.email){
        errors.email = "Email is required!"

    }
    
    else if(!values.email.includes("@")){
        errors.email = "Email address is invalid"
    }

    

    return errors;
}