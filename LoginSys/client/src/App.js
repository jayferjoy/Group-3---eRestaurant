import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import'./App.css';
import axios from 'axios';

import PrivateRoute from './components/routing/PrivateRoute';

import PrivateScreen from "./components/Screens/PrivateScreen";
import LoginScreen from "./components/Screens/LoginScreen";
import RegisterScreen from "./components/Screens/RegisterScreen";
import ForgotPasswordScreen from "./components/Screens/ForgotPasswordScreen";
import ResetPasswordScreen from "./components/Screens/ResetPasswordScreen";

const App =() => {
  return (

    <Router>
      <div className="app">
        <Switch>
        <PrivateRoute exact path ="/" component={PrivateScreen}/>
          <Route exact path="/login" component={LoginScreen}/>
          <Route exact path="/register" component={RegisterScreen}/>
          <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
          <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}/>
        </Switch>
      </div>
      
    </Router>

  );
}


export default App;