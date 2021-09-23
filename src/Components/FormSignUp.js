import React from 'react'

const FormSignUp = () => {
    return (
        <div className = 'form-content-right'>

            <form className = 'form'>


                <h1 className = 'Form-body'>About You</h1> 
            

                <div className = 'form-inputs'>
                    <label htmlFor = 'name' className = 'form-label'>
                        Name:
                    </label>
                    <input
                        id = 'name'
                        type = 'text'
                        name = 'name'
                        className = 'form-input'
                        placeholder = "Enter your Name"
                    />
                   
                </div>
                <div className = 'form-inputs'>
                    <label htmlFor = 'email' className = 'form-label'>
                        Email:
                    </label>
                    <input
                        id = 'email'
                        type = 'text'
                        name = 'email'
                        className = 'form-input'
                        placeholder = "Enter your Email"
                    />
                   
                </div>

                <div className = 'form-inputs'>
                    <label htmlFor = 'phoneNumber' className = 'form-label'>
                        Phone Number(optional):
                    </label>
                    <input
                        id = 'phoneNumber'
                        type = 'text'
                        name = 'phoneNumber'
                        className = 'form-input'
                        placeholder = "Enter your Phone Number"
                    />
                   
                </div>


                <div className = 'form-inputs'>
                    <label htmlFor = '' className = 'form-label'>
                        Email:
                    </label>
                    <input
                        id = 'email'
                        type = 'text'
                        name = 'email'
                        className = 'form-input'
                        placeholder = "Enter your Email"
                    />
                   
                </div>

                



            </form>
        </div>

    )
}

export default FormSignUp
