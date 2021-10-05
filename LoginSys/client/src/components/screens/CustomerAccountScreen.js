import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CustomerAccountScreen.css";

const CustomerAccountScreen = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("authToken")) {
            history.push("/login")
        }

        const fetchPrivateData = async () => {
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            };
      
            try {
              const { data } = await axios.get("/api/private", config);
              setPrivateData(data.data);
            } catch (error) {
              localStorage.removeItem("authToken");
              setError("You are not authorized please login");
            }
          };

        fetchPrivateData();
    }, [history]);

    const logoutHandler = () => {
        localStorage.removeItem("authToken");
        history.push("/login");
    }

    return (
        <div className = "nav"> 
    
    <ul className="nav ul"> 
    <Link to="/home"><button className='navbar-btn'>Home</button></Link>
        <button className="navbar-btn">Menu</button>
        <button className="navbar-btn">Booking</button>
        <Link to="/Register"><button className="navbar-btn">Account</button></Link>
          <Link to="/Login"><button onClick={logoutHandler} className="navbar-btn">Logout</button></Link>
          
          
          </ul>
    
          
        
        
     
      </div>
      );
        
        

        


    
    

    }

  


export default CustomerAccountScreen;