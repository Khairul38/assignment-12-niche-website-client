import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import BookingDetails from './Pages/BookingDetails/BookingDetails';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Destinations from './Pages/Destinations/Destinations';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
// import MyBookings from './Pages/MyBookings/MyBookings';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/packages">
              <Services></Services>
            </Route>
            <PrivateRoute path="/destinations">
              <Destinations></Destinations>
            </PrivateRoute>
            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/booking/:bookingId">
              <BookingDetails></BookingDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
