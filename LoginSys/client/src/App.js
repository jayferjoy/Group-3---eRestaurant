import {Link} from "react-router-dom";
import'./App.css';
import axios from 'axios';

const App =() => {
  return (
    <div className="App">
   

      <div className="div1">
        <h1 >Le Bistrot d’Andre</h1>

      </div>

      <div style={{ 
        backgroundImage: `url("https://i.imgur.com/UH3w8wg.jpg")` 
      }}> 
      </div>

      <button class="button1">Register</button>
      <button class="button1">Login</button>
      <button class="button1">Menu</button>
      <button class="button1">Booking</button>



      <div><img 
      src="https://i.imgur.com/UH3w8wg.jpg"
      alt="new"
      />
      </div>
      


    </div>
  );
}


export default App;