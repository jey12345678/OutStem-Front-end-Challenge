import React from 'react'
import App from '../App';
import useForm from './UseForm';
import validate from './validateInfo';
import '../App.css';
import HeadingDetails from './HeadingDetails.js'

const FormSignUp = ({submitForm}) => {


    const {handleVaccinatedClick,handleTermsClick,handleWedClick,handleThursClick,handleFriClick,handleSatClick,handleChange, values, handleSubmit, errors,checkedState,vaccinatedChecked, setVaccinatedChecked,termsChecked,setTermsChecked,wedChecked,setWedChecked, thursChecked,setThursChecked,friChecked,setFriChecked,satChecked,setSatChecked} = useForm(submitForm, validate);
    
    return (
        <div>

            

            <HeadingDetails/>
            
            <form className = 'form' onSubmit = {handleSubmit}>

                <h2 className = 'Form-header'>About You</h2> 
        
                <div className = 'form-inputs'>
                    <label htmlFor = 'username' className = 'form-label'>
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
                    <label className = 'form-label'>
                        Email:
                    </label>
                    <input
                        id = 'email'
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
                        value = {values.whereFound} 
                        onChange = {handleChange}
                        >

                            <option disabled>Select Option</option>
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

                <div name = 'choices' value = {values.choices} className = 'form-inputs'>
                    <label htmlFor = 'first-choice' className = 'form-label'>
                        First Choice:
                    </label>
                    <select
                        id = 'firstChoice'
                        name = 'firstChoice'
                        className = 'form-input'
                        value = {values.firstChoice} 
                        onChange = {handleChange}
                        >

                            <option disabled>-- Select Your First Team --</option>
                            <option value = "checkInTeam">Check In Team</option>
                            <option value = "wayfindingTeam">Wayfinding Team</option>
                            <option value = "foodServiceTeam">Food Service Team</option>
                            <option value = "hygieneTeam">Hygiene Team</option>
                            <option value = "backstage">Backstage</option>

                    </select>
                    {errors.firstChoice && <p>{errors.firstChoice}</p>}

                </div>

                <div className = 'form-inputs'>
                    <label htmlFor = 'second-choice' className = 'form-label'>
                        Second Choice:
                    </label>
                    <select
                        id = 'secondChoice'
                        name = 'secondChoice'
                        className = 'form-input'
                        value = {values.secondChoice} 
                        onChange = {handleChange}
                        >

                            <option disabled>-- Select Your Second Team --</option>
                            <option value = "checkInTeam">Check In Team</option>
                            <option value = "wayfindingTeam">Wayfinding Team</option>
                            <option value = "foodServiceTeam">Food Service Team</option>
                            <option value = "hygieneTeam">Hygiene Team</option>
                            <option value = "backstage">Backstage</option>

                    </select>
                    {errors.secondChoice && <p>{errors.secondChoice}</p>}

                </div>
                

                <div className = 'form-inputs'>
                    <label htmlFor = 'third-choice' className = 'form-label'>
                        Third Choice:
                    </label>
                    <select
                        id = 'thirdChoice'
                        name = 'thirdChoice'
                        className = 'form-input'
                        value = {values.thirdChoice} 
                        onChange = {handleChange}
                        >

                            <option disabled>-- Select Your Third Team --</option>
                            <option value = "checkInTeam">Check In Team</option>
                            <option value = "wayfindingTeam">Wayfinding Team</option>
                            <option value = "foodServiceTeam">Food Service Team</option>
                            <option value = "hygieneTeam">Hygiene Team</option>
                            <option value = "backstage">Backstage</option>

                    </select>
                    {errors.thirdChoice && <p>{errors.thirdChoice}</p>}

                    {errors.choices && <p>{errors.choices}</p>}

                </div>
                

                <h2 className = 'Form-header'>Availability</h2>

                <div name = "availability"  className = 'availability-inputs'>

                    {errors.availability && <p>{errors.availability}</p>}

                    <div className = 'availability-form' >

                        <label className = 'availability-input' for="wednesday">Wed</label><br></br>
                        <input className = 'availability-input checkbox-design' type="checkbox" id="wednesday" name="wednesday" value="Wednesday" onClick={handleWedClick} checked={wedChecked}></input>

                    </div>

                    <div className = 'availability-form' >

                        <label className = 'availability-input' for="thursday">Thu</label><br></br>
                        <input className = 'availability-input checkbox-design' type="checkbox" id="thursday" name="thursday" value="Thursday" onClick={handleThursClick} checked={thursChecked}></input>

                    </div>

                    <div className = 'availability-form'>
                        <label className = 'availability-input' for="friday">Fri</label><br></br>
                        <input  className = 'availability-input checkbox-design' type="checkbox" id="friday" name="friday" value="Friday" onClick={handleFriClick} checked={friChecked}></input>
                    </div>

                    <div className = 'availability-form last form'>
                        <label className = 'availability-input' for="saturday">Sat</label><br></br>
                        <input className = 'availability-input checkbox-design' type="checkbox" id="saturday" name="saturday" value="Saturday" onClick={handleSatClick} checked={satChecked}></input>
                    </div>

                    <br></br>

                </div>



                <h2 className = 'Form-header health-and-safety-padding'>Health and Safety</h2>

                <div  className = 'form-inputs' >

                    <div className = 'vaccinated-check-design'>

                        <input name = "vaccineCheck" className = "checkbox-vaccinated" type="checkbox" id="vaccinatedCheck" name="vaccinatedCheck" value="vaccinatedCheck" onClick={handleVaccinatedClick} checked={vaccinatedChecked}></input>
                        <label className = "checkbox-label flex-container" for="vaccinatedCheck" >
                            I am fully vaccinated against COVID-19 by an approved vaccine. Required to attend.
                        </label>     
                    </div>
                    {errors.vaccineCheck && <p>{errors.vaccineCheck}</p>}

                    <br></br>

                    <label className = 'form-label' for="vaccinatedCheck">Any health condition we should know about (optional)</label>

                    <textarea id = "textAreaOne" className = "textArea-design" rows="4" cols="50" maxlength="1000" placeholder = "Enter your text here..."></textarea>


                    <label className = 'form-label' for="vaccinatedCheck">Dietary restrictions (optional)</label>
                    <textarea id = "textAreaTwo" className = "textArea-design" rows="4" cols="50" maxlength="1000" placeholder = "Enter your text here..."></textarea>
       
                    <br></br>

                    <input name = 'termsCheck'  className = "checkbox-vaccinated" type="checkbox" id="termsAndConditions" name="termsAndConditions" value="termsAndConditions" onClick={handleTermsClick} checked={termsChecked} ></input>
                    <label className = "checkbox-label" for="termsAndConditions">I agree with the <a target="_blank" className = "link-colour" href = "https://www.google.ca/">Terms and Conditions</a> and 
                        <a target="_blank" className = "link-colour" href = "https://www.google.ca/"> Privacy Policy</a>
                    </label>
                    {errors.termsCheck && <p>{errors.termsCheck}</p>}

                    <br></br>

                    <button name = "submitButton" className = "submit-btn" type = "submit">Submit Application</button>


                </div>

                <br></br>

                




            </form>
        </div>

    )
}

export default FormSignUp
