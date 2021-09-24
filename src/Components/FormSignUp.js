import React from 'react'
import useForm from './UseForm';
import validate from './validateInfo';

const FormSignUp = () => {
    const {handleChange, values, handleSubmit,errors} = useForm(validate);
    return (
        <div className = 'form-content-right'>

            <form className = 'form' onSubmit = {handleSubmit}>


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
                        id = 'whereFound'
                        name = 'whereFound'
                        className = 'form-input'
                        placeholder = "Select Options">

                            <option disabled selected value> -- select an option -- </option>
                            <option value = "socialMedia">Social Media</option>
                            <option value = "wordToMouth">Word to Mouth </option>
                            <option value = "fromTeacher">From Teachers</option>
                            <option value = "volunteeringWebsite">Volunteering Website</option>
                            <option value = "onlineAds">Online Ads</option>
                            <option value = "flyersAndPosters">Flyers/Posters</option>
                            <option value = "emails">Emails</option>

                    </select>
                   
                </div>

                

                <h1 className = 'Form-body'>Team Preference</h1>

                <div>
                    <label htmlFor = 'first-choice' className = 'form-label'>
                        First Choice:
                    </label>
                    <select
                        id = 'first-choice'
                        name = 'first-choice'
                        className = 'form-input'
                        >

                            <option disabled selected value> -- Select your first team -- </option>
                            <option value = "checkInTeam">Check In Team</option>
                            <option value = "wayfindingTeam">Wayfinding Team</option>
                            <option value = "foodServiceTeam">Food Service Team</option>
                            <option value = "hygieneTeam">Hygiene Team</option>
                            <option value = "backstage">Backstage</option>

                    </select>

                </div>

                <div>
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

                <div>
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

                <h1 className = 'Form-body'>Availability</h1>

                <div>
                    
                    <input type="checkbox" id="wednesday" name="wednesday" value="Wednesday"></input>
                    <label for="wednesday">Wednesday</label><br></br>
                    <input type="checkbox" id="thursday" name="thursday" value="Thursday"></input>
                    <label for="thursday">Thursday</label><br></br>
                    <input type="checkbox" id="friday" name="friday" value="Friday"></input>
                    <label for="friday">Friday</label><br></br>
                    <input type="checkbox" id="saturday" name="saturday" value="Saturday"></input>
                    <label for="saturday">Saturday</label><br></br>


                </div>

                <h1 className = 'Form-body'>Health and Safety</h1>

                <div>
                    <input type="checkbox" id="vaccinatedCheck" name="vaccinatedCheck" value="vaccinatedCheck"></input>
                    <label for="vaccinatedCheck">I am fully vaccinated against COVID-19 by an approved vaccine. Required to attend.</label><br></br>

                    <label for="vaccinatedCheck">Any health condition we should know about (optional)</label><br></br>

                    <textarea rows="4" cols="50" maxlength="1000">Enter your text here...</textarea>

                    <br></br>

                    <label for="vaccinatedCheck">Dietary restrictions (optional)</label><br></br>
                    <textarea rows="4" cols="50" maxlength="1000">Enter your text here...</textarea>

                </div>

                <button className = "form-input-btn" type = "submit">Submit Application</button>




            </form>
        </div>

    )
}

export default FormSignUp
