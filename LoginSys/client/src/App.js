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
import MenuGeneralScreen from './components/screens/MenuGeneralScreen';
import MenuDinnerScreen from './components/screens/MenuDinnerScreen';
import MenuEntreesScreen from './components/screens/MenuEntreesScreen';
import MenuLunch from './components/screens/MenuLunch';
import MenuDDScreen from './components/screens/MenuDDScreen';
import CurrentBookingsScreen from './components/screens/CurrentBookingsScreen'
import BookingDaysScreen from './components/screens/BookingDaysScreen'


import BookingTimesScreen from './components/screens/BookingTimesScreen'
import BookingTablesScreen from './components/screens/BookingTablesScreen'

import BookingScreen from './components/screens/BookingScreen'
import BookingLunchScreen from './components/screens/BookingLunchScreen'
import InvoiceScreen from './components/screens/InvoiceScreen'

import CurrentBookingScreen from './components/screens/CurrentBookingScreen'


import ManagerBookingScreen from './components/screens/ManagerBookingScreen';



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
            <Route exact path="/menug" component={MenuGeneralScreen}/>
            <Route exact path="/menul" component={MenuLunch}/>
            <Route exact path="/menud" component={MenuDinnerScreen}/>
            <Route exact path="/menudd" component={MenuDDScreen}/>
            <Route exact path="/menue" component={MenuEntreesScreen}/>
            <Route exact path="/booking" component={CurrentBookingsScreen}/>
            <Route exact path="/bookingtimes" component={BookingTimesScreen}/>

            <Route exact path="/bookingday" component={BookingDayScreen}/>

            <Route exact path="/bookingtables" component={BookingTablesScreen}/>

            <Route exact path="/bookingmains" component={BookingScreen}/>
            <Route exact path="/bookinglunch" component={BookingLunchScreen}/>
            <Route exact path="/invoice" component={InvoiceScreen}/>
    
            <Route exact path="/currentbookings" component={CurrentBookingScreen}/>


            <Route exact path="/Mbooking" component={ManagerBookingScreen}/>
            

            
          </Switch>

        </div>

      </Router>)
    
    
  
};
 

export default App;

