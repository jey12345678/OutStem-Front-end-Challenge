import React from 'react'
import App from '../App';
import useForm from './UseForm';
import validate from './validateInfo';
import '../App.css';
import HeadingDetails from './HeadingDetails.js'

const FormSignUp = ({submitForm}) => {
    const {handleChange, values, handleSubmit,errors} = useForm(submitForm, validate);
    return (
        <div className = 'form-content-right'>

            <HeadingDetails/>
            <form className = 'form' onSubmit = {handleSubmit}>

                <h2 className = 'Form-header'>About You</h2> 
        
                <div className = 'form-inputs'>
                    <label htmlFor = 'username' className = 'form-label'>
                        Name:
                    </label>
                    <input
                        id = 'username'
                        type = 'text'
                        name = 'name'
                        className = 'form-input'
                        placeholder = "Enter your Name"
                        value = {values.name}
                        onChange = {handleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                   
                </div>
                <div className = 'form-inputs'>
                    <label htmlFor = 'email' className = 'form-label'>
                        Email:
                    </label>
                    <input
                        id = 'email'
                        type = 'email'
                        name = 'email'
                        className = 'form-input'
                        placeholder = "Enter your Email"
                        value = {values.email}
                        onChange = {handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                   
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
                    <label htmlFor = 'whereFound' className = 'form-label'>
                        Where did you hear about this opportunity?
                    </label>
                    <select
                        id = "whereFound"
                        name = "whereFound" 
                        className = 'form-input'
                        placeholder = "Select Options"
                        value = {values.whereFound} 
                        onChange = {handleChange}
                        >

                            <option></option>
                            <option >Social Media</option>
                            <option >Word to Mouth </option>
                            <option >From Teachers</option>
                            <option >Volunteering Website</option>
                            <option >Online Ads</option>
                            <option >Flyers/Posters</option>
                            <option >Emails</option>

                    </select>
                    {errors.whereFound && <p>{errors.whereFound}</p>}
                    
                   
                </div>

               

                

                <h2 className = 'Form-header'>Team Preference</h2>

                <div className = 'form-inputs'>
                    <label htmlFor = 'first-choice' className = 'form-label'>
                        First Choice:
                    </label>
                    <select
                        id = 'first-choice'
                        name = 'first-choice'
                        value = {values.whereFound} 
                        onChange = {handleChange}
                        className = 'form-input'
                        >

                            <option></option>
                            <option value = "checkInTeam">Check In Team</option>
                            <option value = "wayfindingTeam">Wayfinding Team</option>
                            <option value = "foodServiceTeam">Food Service Team</option>
                            <option value = "hygieneTeam">Hygiene Team</option>
                            <option value = "backstage">Backstage</option>

                    </select>

                </div>

                <div className = 'form-inputs'>
                    <label htmlFor = 'second-choice' className = 'form-label'>
                        Second Choice:
                    </label>
                    <select
                        id = 'second-choice'
                        name = 'second-choice'
                        className = 'form-input'
                        >

                            <option disabled selected value> -- Select your second team -- </option>
                            <option value = "checkInTeam">Check In Team</option>
                            <option value = "wayfindingTeam">Wayfinding Team</option>
                            <option value = "foodServiceTeam">Food Service Team</option>
                            <option value = "hygieneTeam">Hygiene Team</option>
                            <option value = "backstage">Backstage</option>

                    </select>

                </div>

                <div className = 'form-inputs'>
                    <label htmlFor = 'third-choice' className = 'form-label'>
                        Third Choice:
                    </label>
                    <select
                        id = 'third-choice'
                        name = 'third-choice'
                        className = 'form-input'
                        >

                            <option disabled selected value> -- Select your third team -- </option>
                            <option value = "checkInTeam">Check In Team</option>
                            <option value = "wayfindingTeam">Wayfinding Team</option>
                            <option value = "foodServiceTeam">Food Service Team</option>
                            <option value = "hygieneTeam">Hygiene Team</option>
                            <option value = "backstage">Backstage</option>

                    </select>



                </div>

                <h2 className = 'Form-header'>Availability</h2>

                <div className = 'avaliablity-inputs'>

                    <div className = 'avaliablity-form' >

                        <label className = 'avaliablity-input' for="wednesday">Wednesday</label><br></br>
                        <input className = 'avaliablity-input' type="checkbox" id="wednesday" name="wednesday" value="Wednesday"></input>

                    </div>

                    <div className = 'avaliablity-form' >

                        <label className = 'avaliablity-input' for="thursday">Thursday</label><br></br>
                        <input className = 'avaliablity-input' type="checkbox" id="thursday" name="thursday" value="Thursday" align-content = "center" > </input>

                    </div>

                    <div className = 'avaliablity-form'>
                        <label className = 'avaliablity-input' for="friday">Friday</label><br></br>
                        <input  className = 'avaliablity-input'type="checkbox" id="friday" name="friday" value="Friday"></input>
                    </div>

                    <div className = 'avaliablity-form'>
                        <label className = 'avaliablity-input' for="saturday">Saturday</label><br></br>
                        <input className = 'avaliablity-input' type="checkbox" id="saturday" name="saturday" value="Saturday"></input>
                    </div>
                    

                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <br></br>
                <br></br>
                
                
                <h2 className = 'Form-header'>Health and Safety</h2>

                <div className = 'form-inputs' >

                    <input type="checkbox" id="vaccinatedCheck" name="vaccinatedCheck" value="vaccinatedCheck"></input>
                    <label for="vaccinatedCheck">I am fully vaccinated against COVID-19 by an approved vaccine. Required to attend.</label><br></br>

                    <label for="vaccinatedCheck">Any health condition we should know about (optional)</label><br></br>

                    <textarea rows="4" cols="50" maxlength="1000">Enter your text here...</textarea>

                    <br></br>

                    <label for="vaccinatedCheck">Dietary restrictions (optional)</label><br></br>
                    <textarea rows="4" cols="50" maxlength="1000">Enter your text here...</textarea>


                    <br></br>
                    <br></br>

                    <input type="checkbox" id="termsAndConditions" name="termsAndConditions" value="termsAndConditions"></input>
                    <label for="termsAndConditions">I agree with the <a href = "https://www.google.ca/">Terms and Conditions</a> and 
                        <a href = "https://www.google.ca/"> Privacy Policy</a>
                    </label>
                    <br></br>


                </div>

                <button className = "form-input-btn" type = "submit">Submit Application</button>




            </form>
        </div>

    )
}

export default FormSignUp
