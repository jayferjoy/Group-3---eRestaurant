import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./EmployeeLoginScreen.css";

const EmployeeLoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("employeeToken")) {
      history.push("/");
    }
  }, [history]);

  const employeeLoginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(

        "/api/auth/employeeLogin",

        "/api/auth/Elogin",

        { email, password },
        config
      );

      localStorage.setItem("employeeToken", data.token);

      history.push("/employeepage");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };


  
  
    const managerLoginHandler = async (e) => {
      e.preventDefault();
  
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const { data } = await axios.post(
          "/api/auth/Mlogin",
          { email, password },
          config
        );
  
        localStorage.setItem("managerToken", data.token);
  
        history.push("/managerpage");
      } catch (error) {
        setError(error.response.data.error);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
    };


  return (
    <div className = "nav"> 

<ul className="nav ul"> 
      <Link to="/home"><button className='navbar-btn-staff'>Home</button></Link>
      <Link to="/Register"><button className="navbar-btn-staff">Register</button></Link>
      <Link to="/Login"><button className="navbar-btn-staff">Login</button></Link>
      <button className="navbar-btn-staff">Menu</button>
      <button className="navbar-btn-staff">Booking</button>
      </ul>
    
    

  <div className="login-screen">

  <div className="employee-login-screen">

      
  
    <form onSubmit={employeeLoginHandler} className="employee-login-screen__form">
      <h3 className="employee-login-screen__title">Employee Login</h3>
      {error && <span className="error-message">{error}</span>}
      
      <div className="form-group">
        <label htmlFor="email">Employee Email:</label>
        <input
          type="email"
          required
          id="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          tabIndex={1}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Password:{" "}
          <Link to="/forgotpassword" className="employee-login-screen__forgotpassword">
            Forgot Password?
          </Link>
        </label>
        <input
          type="password"
          required
          id="password"
          autoComplete="true"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          tabIndex={2}
        />
      </div>
      <button type="submit" className="btn btn-primary-staff">
        Login
      </button>

      
     <label htmlFor="password">
          
          <Link to="/login" className="employee-login-screen__redirect">
            Not an Employee?
          </Link>
          </label>
    </form>

  </div>

    </div>
    <div className="div">
      
  
    <form onSubmit={managerLoginHandler} className="employee-login-screen__form">
      <h3 className="employee-login-screen__title">Manager Login</h3>
      {error && <span className="error-message">{error}</span>}
      
      <div className="form-group">
        <label htmlFor="email">Manager Email:</label>
        <input
          type="email"
          required
          id="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          tabIndex={1}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">
          Password:{" "}
          <Link to="/forgotpassword" className="employee-login-screen__forgotpassword">
            Forgot Password?
          </Link>
        </label>
        <input
          type="password"
          required
          id="password"
          autoComplete="true"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          tabIndex={2}
        />
      </div>
      <button type="submit" className="btn btn-primary-staff">
        Login
      </button>

      
     <label htmlFor="password">
          
          <Link to="/login" className="employee-login-screen__redirect">
            Not an Employee?
          </Link>
          </label>
    </form>
    </div>

  </div>
  );
};

export default EmployeeLoginScreen;