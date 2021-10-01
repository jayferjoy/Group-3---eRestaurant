import'./App.css';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import {Route, Link} from "react-router-dom"
import NavBar from './NavBar';
function App(){
  return (
    <div > 
      <div className="div1">
        <h1 >Le Bistrot d’Andre</h1>
      </div>
      <div>
      <NavBar/>
      <Route exact path="/" component={Home}/>
     <Route exact path="/" component={Register}/>
     <Route exact path="/" component={Login}/>
     

    </div>
    </div>



    
  );
}

export default App;
