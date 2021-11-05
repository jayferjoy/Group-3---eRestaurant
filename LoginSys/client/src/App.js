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
import BookingDaysScreen2 from './components/screens/BookingDaysScreen2'
import BookingDayScreen from './components/screens/BookingDayScreen'
import BookingTimesScreen from './components/screens/BookingTimesScreen'
import BookingTablesScreen from './components/screens/BookingTablesScreen'
import BookingTablessScreen from './components/screens/BookingTablessScreen'
import BookingTablessScreen2 from './components/screens/BookingTablessScreen2'
import BookingScreen from './components/screens/BookingScreen'
import BookingLunchScreen from './components/screens/BookingLunchScreen'
import InvoiceScreen from './components/screens/InvoiceScreen'
import InvoiceScreen2 from './components/screens/InvoiceScreen2'
import CurrentBookingScreen from './components/screens/CurrentBookingScreen'
import CurrentBookingScreen2 from './components/screens/CurrentBookingScreen2'
import CurrentBookingScreenn from './components/screens/CurrentBookingScreenn'
import BookingTimessScreen from './components/screens/BookingTimessScreen';
import BookingTimessScreen2 from './components/screens/BookingTimessScreen2';
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
            <Route exact path="/bookingdays" component={BookingDaysScreen}/>
            <Route exact path="/bookingday" component={BookingDayScreen}/>
            <Route exact path="/boookingday" component={BookingDaysScreen2}/>
            <Route exact path="/bookingtables" component={BookingTablesScreen}/>
            <Route exact path="/bookingtabless" component={BookingTablessScreen}/>
            <Route exact path="/boookingtabless" component={BookingTablessScreen2}/>
            <Route exact path="/bookingmains" component={BookingScreen}/>
            <Route exact path="/bookinglunch" component={BookingLunchScreen}/>
            <Route exact path="/invoice" component={InvoiceScreen}/>
            <Route exact path="/invoiice" component={InvoiceScreen2}/>
            <Route exact path="/currentbookings" component={CurrentBookingScreen}/>
            <Route exact path="/currentboookings" component={CurrentBookingScreen2}/>
            <Route exact path="/currenntbookings" component={CurrentBookingScreenn}/>
            <Route exact path="/bookingtimess" component={BookingTimessScreen}/>
            <Route exact path="/boookingtimess" component={BookingTimessScreen2}/>
            <Route exact path="/Mbooking" component={ManagerBookingScreen}/>
            

            
          </Switch>

        </div>

      </Router>)
    
    
  
};
 

export default App;

