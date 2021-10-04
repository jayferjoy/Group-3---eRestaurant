import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./ManagerPageScreen.css";

const EmployeePageScreen = ({history}) => {
    const [error, setError] = useState("");
    const [privateData, setPrivateData] = useState("");

    useEffect(() => {
        if(!localStorage.getItem("managerToken")) {
            history.push("/employeelogin")
        }

        const fetchPrivateData = async () => {
            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("managerToken")}`,
              },
            };
      
            try {
              const { data } = await axios.get("/api/private", config);
              setPrivateData(data.data);
            } catch (error) {
              localStorage.removeItem("managerToken");
              setError("You are not authorized please login");
            }
          };

        fetchPrivateData();
    }, [history]);

    const logoutHandler = () => {
        localStorage.removeItem("managerToken");
        history.push("/login");
    }

    return (
        <div className = "nav"> 
    
    <ul className="nav ul"> 
          <Link to="/"><button className='navbar-btn-manager'>Add to Menu</button></Link>
          <Link to="/Register"><button className="navbar-btn-manager">Account</button></Link>
          <Link to="/Login"><button className="navbar-btn-manager">View Bookings</button></Link>
          <Link to="/addstaff"><button className="navbar-btn-manager">Add Staff</button></Link>
          <Link to="/Login"><button onClick={logoutHandler} className="navbar-btn-manager">Logout</button></Link>

          
          
          </ul>
    
          
        
        
     
      </div>
      );
        
        

        


    
    

    }

  


export default EmployeePageScreen;