import {Routes,Route} from "react-router-dom"
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import Services from '../pages/Services';
import Signup from '../pages/Signup';
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import ProtectedRoute from "./ProtectedRoute";
import Scan from '../pages/Scan/Scan';
import Feedback from "../pages/Doctors/Feedback";



const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/doctors" element={<Doctors />}/>
    <Route path="/doctors/:id" element={<DoctorDetails />}/>
    <Route path="/login" element={<Login />}/>
    <Route path="/scan" element={<Scan />}/>
    <Route path="/register" element={<Signup />}/>
    <Route path="/classification" element={<Services />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/feedback" element={<Feedback />}/>
    <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={['patient']}><MyAccount /></ProtectedRoute>}/>
    <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={['doctor']}><Dashboard /></ProtectedRoute>}/>
  </Routes>
}

export default Routers
