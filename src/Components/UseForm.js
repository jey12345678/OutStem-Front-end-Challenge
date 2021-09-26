import {useState, useEffect} from 'react'

//useState is a Hook that allows you to have state variables in functional
//components. You pass the initial state to this function and it returns a variable
//with the current state value and another function to update the value.
const UseForm = (callback,validate) =>{
    const [values, setValues] = useState({
        name: '',
        email: '',
        whereFound: 'Select Option',
        firstChoice: '-- Select Your First Team --',
        secondChoice: '-- Select Your Second Team --',
        thirdChoice: '-- Select Your Third Team --',
        choices: ''

        

    })

    //useState with errors as well.
    const [errors,setErrors] = useState({})

    const [vaccinatedChecked, setVaccinatedChecked] = useState(false);
    const[termsChecked,setTermsChecked] = useState(false);
    const[wedChecked,setWedChecked] = useState(false);
    const[thursChecked,setThursChecked] = useState(false);
    const[friChecked,setFriChecked] = useState(false);
    const[satChecked,setSatChecked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);


    //Whenever you change something update the values.

    const handleChange = e =>{

        const {name, value} = e.target;

        

        setValues({
            ...values, //spreading into the values
            [name] : value //targets values of names.

        });

    };

    //Prevent the input from refreshing when submit button is clicked
    const handleSubmit = e =>{
        e.preventDefault();

        setErrors(validate(values,vaccinatedChecked,termsChecked,wedChecked,thursChecked,friChecked,satChecked));
        setIsSubmitting(true);
    }

    const handleVaccinatedClick = () => {
        setVaccinatedChecked(!vaccinatedChecked);
    }
    const handleTermsClick = () => {
        setTermsChecked(!termsChecked);
    }
    const handleWedClick = () => {
        setWedChecked(!wedChecked);
    }
    const handleThursClick = () =>{
        setThursChecked(!thursChecked);
    }
    const handleFriClick = () =>{
        setFriChecked(!friChecked);
    }
    const handleSatClick = () =>{
        setSatChecked(!satChecked);
    }

    //useEffect, to display errors if there are any, if there isn't allows you to submit
    useEffect(() =>{

        //if the errors length is equal to 0.
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();

        }
        //Only want it to trigger when errors occurs.
    }, [errors]);

    return {handleVaccinatedClick,handleTermsClick,handleWedClick,handleThursClick,handleFriClick,handleSatClick, handleChange,values,handleSubmit,errors,vaccinatedChecked, setVaccinatedChecked,termsChecked,setTermsChecked,wedChecked,setWedChecked, thursChecked,setThursChecked,friChecked,setFriChecked,satChecked,setSatChecked};
};

export default UseForm;