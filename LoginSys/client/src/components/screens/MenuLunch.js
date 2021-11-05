import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ForgotPasswordScreen.css";


const MenuLunch = () => {
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
        
          <Link to="/Login"><button  className="navbar-btn">Logout</button></Link>
        </ul>
    <div className="forgotpassword-screen">
      
            <img src={require('./images/Lunch.png').default} height = {757} width = {612} />
        
    </div>
    </div>
  );
};

export default MenuLunch;