import React from 'react'
import '../App.css';

const SuccessForm = () => {
    return (
        <div className = "App-details">
            <h1 className = "Form-heading">Thank You!</h1>

            <p className = "form-success">
                Thank you for applying to volunteer at OutStem Tech Fest 2022!
                We will contact you once your application has been approved.
                Please note that we require all volunteers and attendees to
                be fully vaccinated against COVID-19 prior to attending the conference.
            </p>

            <p >
                You may close the window now.
            </p>
            
        </div>
    )
}

export default SuccessForm
