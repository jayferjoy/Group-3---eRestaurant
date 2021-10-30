import React from 'react';
import Select from 'react-select';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./ForgotPasswordScreen.css";

const day = [
    { label: "30th of October", value: 1 },
    { label: "31st of October", value: 2 },
    { label: "1st of November", value: 3 },
    { label: "2nd of November", value: 4 },
    { label: "3rd of November", value: 5 },
    { label: "5th of November", value: 6 },
    { label: "6th of November", value: 7 },
    { label: "7th of November", value: 8 },
    { label: "8th of November", value: 9 },
    { label: "9th of November", value: 10 },
    { label: "10th of November", value: 11 },
    { label: "11th of November", value: 12 },


  ];

  
  
  
  const BookingDayScreen = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
  
    const forgotPasswordHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const { data } = await axios.post(
          "/api/auth/forgotpassword",
          { email },
          config
        );
  
        setSuccess(data.data);
      } catch (error) {
        setError(error.response.data.error);
        setEmail("");
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };
  
    return (
      <div className = "nav"> 
  
  <ul className="nav ul"> 
  <Link to="/home"><button className='navbar-btn'>Home</button></Link>
    <Link to="/menug"><button className="navbar-btn">Menu</button> </Link>
    <Link to="/booking"><button className="navbar-btn">Booking</button></Link>
        
          <Link to="/Login"><button className="navbar-btn">Logout</button></Link>
          </ul>
      <div className="forgotpassword-screen">
        <form
          onSubmit={forgotPasswordHandler}
          className="forgotpassword-screen__form"
        >
          <h3 className="forgotpassword-screen__title">Choose Day</h3>
          {error && <span className="error-message">{error}</span>}
          {success && <span className="success-message">{success}</span>}
          <div className="form-group">
            <p className="forgotpassword-screen__subtext">
               Day
          <Select options={ day } />
          
         
          </p>
            
            
          </div>
          <Link to="/bookingtimess"><button type="submit" className="btn btn-primary">Submit</button></Link>
            
          
        </form>
      </div>
      </div>
    );
  };
  
  export default BookingDayScreen;