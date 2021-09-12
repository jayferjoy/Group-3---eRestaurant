import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import'./App.css';
import axios from 'axios';


const App =() => {
  return (

    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegisterScreen}/>
          <Route exact path="/forgotpassword" component={ForgotPassword}/>
          <Route exact path="/passwordreset" component={PasswordReset}/>
        </Switch>
      </div>
    </Router>

  );
}


export default App;