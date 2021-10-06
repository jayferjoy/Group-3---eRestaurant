
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './components/routing/PrivateRoute';

import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import EmployeeLoginScreen from './components/screens/EmployeeLoginScreen';
import EmployeePageScreen from './components/screens/EmployeePageScreen';
import ManagerPageScreen from './components/screens/ManagerPageScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import AddStaffScreen from './components/screens/AddStaffScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import CustomerAccountScreen from './components/screens/CustomerAccountScreen';

import HomeScreen from './components/screens/HomeScreen';



const App = () => {
  return (
      <Router>
        <div className="app">
          <Switch>
            <PrivateRoute exact path="/" component={PrivateScreen}/>
            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/addstaff" component={AddStaffScreen}/>
            <Route exact path="/employeelogin" component={EmployeeLoginScreen}/>
            <Route exact path="/employeepage" component={EmployeePageScreen}/>
            <Route exact path="/managerpage" component={ManagerPageScreen}/>
            <Route exact path="/register" component={RegisterScreen}/>
            <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
            <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}/>
            <Route exact path="/customeraccount" component={CustomerAccountScreen}/>
            <Route exact path="/home" component={HomeScreen}/>

            
          </Switch>

        </div>

      </Router>)
    
    
  
};

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './components/routing/PrivateRoute';

import PrivateScreen from './components/screens/PrivateScreen';
import LoginScreen from './components/screens/LoginScreen';
import EmployeeLoginScreen from './components/screens/EmployeeLoginScreen';
import EmployeePageScreen from './components/screens/EmployeePageScreen';
import ManagerPageScreen from './components/screens/ManagerPageScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import AddStaffScreen from './components/screens/AddStaffScreen';
import ForgotPasswordScreen from './components/screens/ForgotPasswordScreen';
import ResetPasswordScreen from './components/screens/ResetPasswordScreen';
import CustomerAccountScreen from './components/screens/CustomerAccountScreen';

import HomeScreen from './components/screens/HomeScreen';



const App = () => {
  return (
      <Router>
        <div className="app">
          <Switch>
            <PrivateRoute exact path="/" component={PrivateScreen}/>
            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/addstaff" component={AddStaffScreen}/>
            <Route exact path="/employeelogin" component={EmployeeLoginScreen}/>
            <Route exact path="/employeepage" component={EmployeePageScreen}/>
            <Route exact path="/managerpage" component={ManagerPageScreen}/>
            <Route exact path="/register" component={RegisterScreen}/>
            <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
            <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}/>
            <Route exact path="/customeraccount" component={CustomerAccountScreen}/>
            <Route exact path="/home" component={HomeScreen}/>

            
          </Switch>

        </div>

      </Router>)
    
    
  
};

export default App;

