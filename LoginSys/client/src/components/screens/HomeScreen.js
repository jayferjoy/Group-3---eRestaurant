
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const HomeScreen = ({ history }) => {
  

  

  return (
    <div className = "nav"> 

<ul className="nav ul"> 
        <Link to="/home"><button className='navbar-btn'>Home</button></Link>
        <Link to="/Register"><button className="navbar-btn">Register</button></Link>
        <Link to="/Login"><button className="navbar-btn">Login</button></Link>
        <button className="navbar-btn">Menu</button>
        <button className="navbar-btn">Booking</button>
        </ul>
    
    </div>
  );
};

export default HomeScreen;