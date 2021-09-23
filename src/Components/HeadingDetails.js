import React from 'react';
import image from '../Images/hero.webp';
import '../App.css';

export const HeadingDetails = () => {
    return (

        <div className = "App-details">
            <img src={image} className="App-logo" alt="logo" style= {{width: "100%"}}/>
            <header className="Form-header">

                <h1>2022 OutStem Tech Fest Volunteer Sign Up </h1>

                <p>
                    All fields are mandatory unless otherwise specified.
                </p>
            </header>
      </div>
    )
}
export default HeadingDetails;