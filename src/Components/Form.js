import React, {useState} from 'react'
import FormSignup from './FormSignUp.js'
import SuccessForm from './SuccessForm.js'

export const Form = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (

        <div>
            {!isSubmitted ? <FormSignup submitForm = 
            {submitForm} /> : <SuccessForm />}

        </div>

         
    )
}
export default Form;
