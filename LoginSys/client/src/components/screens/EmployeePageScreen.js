import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EmployeePageScreen.css";

const EmployeePageScreen = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("employeeToken")) {
            history.push("/employee")
        }

        const fetchPrivateData = async () => {
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("employeeToken")}`,
              },
            };
      
            try {
              const { data } = await axios.get("/api/private", config);
              setPrivateData(data.data);
            } catch (error) {
              localStorage.removeItem("employeeToken");
              setError("You are not authorized please login");
            }
          };

        fetchPrivateData();
    }, [history]);

    const logoutHandler = () => {
        localStorage.removeItem("employeeToken");
        history.push("/login");
    }

    return (
        <div className = "nav"> 
    
    <ul className="nav ul"> 
          <Link to="/"><button className='navbar-btn-staff'>Add to Menu</button></Link>
          <Link to="/Register"><button className="navbar-btn-staff">Account</button></Link>
          <Link to="/Login"><button className="navbar-btn-staff">View Bookings</button></Link>
          <Link to="/Login"><button onClick={logoutHandler} className="navbar-btn-staff">Logout</button></Link>
          
          
          </ul>
    
          
        
        
     
      </div>
      );
        
        

        


    
    

    }

  


export default EmployeePageScreen;