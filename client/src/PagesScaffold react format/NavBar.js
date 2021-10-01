import React from 'react'
import {Link} from 'react-router-dom'
import'./App.css';

function NavBar(){
    return(
        <ul>
        <Link to="/"><button className='button1'>Home</button></Link>
        <Link to="/Register"><button className="button1">Register</button></Link>
        <Link to="/Login"><button className="button1">Login</button></Link>
        <button className="button1">Menu</button>
        <button className="button1">Booking</button>
        </ul>
    );
    
}

export default NavBar;