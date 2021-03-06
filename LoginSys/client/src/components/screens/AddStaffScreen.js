import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AddStaffScreen.css";

const RegisterScreen = ({ history }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const registerEmployeeHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/Eregister",
        {
          username,
          email,
          password,
        },
        config
      );

      
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  const registerManagerHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    if (password !== confirmpassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("Passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "/api/auth/Mregister",
        {
          username,
          email,
          password,
        },
        config
      );

      
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

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
    <div className="register-screen">
      <form onSubmit={registerEmployeeHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register Staff</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Role:</label>
          <input
            type="text"
            required
            id="role"
            autoComplete="true"
            placeholder="Enter Role"
            
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Temp Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        
         <button type="submit" className="navbar-btn-manager">
          Register
        </button>
        
    </form>
        </div>

        <div className="register-screen">
      <form onSubmit={registerManagerHandler} className="register-screen__form">
        <h3 className="register-screen__title">Register Manager</h3>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmpassword">Location:</label>
          <input
            type="text"
            required
            id="role"
            autoComplete="true"
            placeholder="Location"
            
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Temp Password:</label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password:</label>
          <input
            type="password"
            required
            id="confirmpassword"
            autoComplete="true"
            placeholder="Confirm password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="navbar-btn-manager">
          Register
        </button>
        
        <span className="register-screen__subtext">
          
        </span>
      </form>
    </div>
    </div>
  );
};

export default RegisterScreen;