import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import AddPackage from './Pages/AddPackage/AddPackage';
import AllBookings from './Pages/AllBookings/AllBookings';
import BookingDetails from './Pages/BookingDetails/BookingDetails';
import Destinations from './Pages/Destinations/Destinations';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyBookings from './Pages/MyBookings/MyBookings';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/packages">
              <Services></Services>
            </PrivateRoute>
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
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/allBookings">
              <AllBookings></AllBookings>
            </PrivateRoute>
            <PrivateRoute path="/addPackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/booking/:bookingId">
              <BookingDetails></BookingDetails>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
