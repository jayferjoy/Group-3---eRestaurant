import {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./Style.css";

const ResetPasswordScreen = () => {
    return (
        <div className="App">
      

        <div className="div1">
          <h1 >Le Bistrot d’Andre</h1>
  
        </div>
        
        <div style={{ 
          backgroundImage: `url("https://i.imgur.com/UH3w8wg.jpg")` 
        }}> 
        </div>
  
        <button class="button1" > <Link to="/Register">Register</Link></button>
        <button className="button1"> <Link to="/Login">Login</Link></button>
        <button class="button1">Menu</button>
        <button class="button1">Booking</button>
       
  
  
  
  
        <div>
        <h1 >Reset Password</h1>
        <div>
        <label>New Password: </label>
        <input type="password"></input>
  
        </div>
        <div>
        <label>Confirm New Password: </label>
        <input type="password"></input>
  
        </div>
        <div>
        <button>Reset Password</button>
        </div> 
        <img 
        src="https://i.imgur.com/UH3w8wg.jpg"
        alt="new"
        />
        </div>
        
  
  
      </div>
    )
  }

export default ResetPasswordScreen;