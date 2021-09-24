import {useState, useEffect} from 'react'

//useState is a Hook that allows you to have state variables in functional
//components. You pass the initial state to this function and it returns a variable
//with the current state value and another function to update the value.
const UseForm = (validate) =>{
    const [values, setValues] = useState({
        name: '',
        email: ''
    })

    //useState with errors as well.
    const [errors,setErrors] = useState({})


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

        setErrors(validate(values));
    }

    return {handleChange,values,handleSubmit,errors};
};

export default UseForm;