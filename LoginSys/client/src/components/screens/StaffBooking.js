import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ForgotPasswordScreen.css";


const ForgotPasswordScreen = () => {
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
        <Link to="/Register"><button className="navbar-btn">Register</button></Link>
        <Link to="/Login"><button className="navbar-btn">Login</button></Link>
        <button className="navbar-btn">Menu</button>
        <button className="navbar-btn">Booking</button>
        </ul>
    <div className="forgotpassword-screen">
      <form
        onSubmit={forgotPasswordHandler}
        className="forgotpassword-screen__form"
      >
        <h3 className="forgotpassword-screen__title"> Bookings</h3>
        {error && <span className="error-message">{error}</span>}
        {success && <span className="success-message">{success}</span>}
        <div className="form-group2">
          <p className="forgotpassword-screen__subtext">
          <button className="btn btn-primary2">| 29th of October 2021 | 4pm | Table for 2 |
          <br /> 
          Mains: 
          <br />  
          French onion soup 
          <br />  
          Salmon en papillote

          <br />  
          Drinks:
          <br />  
          Coke
          <br />  
          Wine
          <br />
          Entrees:
          <br />
          Flamiche
          <br />  
          Desserts:
          <br />
          None
          
          
           </button>
          </p>
          
          
        </div>
        <div className="form-group2">
          <p className="forgotpassword-screen__subtext">
          <button className="btn btn-primary2">| 1st of November 2021 | 11am | Table for 2 |
          <br /> 
          Mains: 
          <br />  
          Escargot  
          <br />  
          Galette Crepes

          <br />  
          Drinks:
          <br />  
          Corona
          <br />  
          Coke
          <br />
          Entrees:
          <br />
          French Fries
          <br />  
          Desserts:
          <br />
          None
          
          
           </button>
          </p>
          
        </div>
        <Link to="/Login"><button className="btn btn-primary">Back</button></Link>
        
          
        
      </form>
    </div>
    </div>
  );
};

export default ForgotPasswordScreen;