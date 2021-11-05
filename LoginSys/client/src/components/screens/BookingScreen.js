import React from 'react';
import Select from 'react-select';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./ForgotPasswordScreen.css";

const main = [
    { label: "Steak frites $15", value: 1 },
    { label: "French onion soup $10", value: 2 },
    { label: "Salmon en papillote $25", value: 3 },
    { label: "Quiche Lorraine $25", value: 4 },
    { label: "Croque monsieur $20", value: 5 },
    { label: "Boeuf bourguignon $30", value: 6 },
    { label: "NONE", value: 7 },
  ];

  const drinks = [
    { label: "Coke $3", value: 1 },
    { label: "Water Jug FREE", value: 2 },
    { label: "Wine $10", value: 3 },
    { label: "Corona $4", value: 4 },
    { label: "Chocolate Milkshake $6", value: 5 },
    { label: "NONE", value: 6 },

  ];

  const desserts = [
    { label: "Lime sugar madeleines $6", value: 1 },
    { label: "Apple, gin and juniper tarte tatin $11", value: 2 },
    { label: "Cherry and rose eclairs $10", value: 3 },
    { label: "Creme caramel $5", value: 4 },
    { label: "NONE", value: 5 },
    

  ];

  const entres = [
    { label: "Quiche Lorraine $10", value: 1 },
    { label: "Flamiche $5", value: 2 },
    { label: "Pissaladière $10", value: 3 },
    { label: "Tarte Flambee $7", value: 4 },
    { label: "French Fries $10", value: 5 },
    { label: "NONE", value: 6 },
    

  ];
  
  
  const BookingScreen = () => {
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
          <h3 className="forgotpassword-screen__title">Dinner Order</h3>
          {error && <span className="error-message">{error}</span>}
          {success && <span className="success-message">{success}</span>}
          <div className="form-group">
            <p className="forgotpassword-screen__subtext">
               Mains
          <Select options={ main } />
          <Select options={ main } />
          <Select options={ main } />
          <Select options={ main } />
          Entrees
          <Select options={ entres } />
          <Select options={ entres } />
          <Select options={ entres } />
          <Select options={ entres } />

          Desserts
          <Select options={ desserts } />
          <Select options={ desserts } />
          <Select options={ desserts } />
          <Select options={ desserts } />
          Drinks
          <Select options={ drinks } />
          <Select options={ drinks } />
          <Select options={ drinks } />
          <Select options={ drinks } />
  
          </p>
            
            
          </div>
          <Link to="/invoice"><button type="submit" className="btn btn-primary">Submit</button></Link>
            
          
        </form>
      </div>
      </div>
    );
  };
  
  export default BookingScreen;