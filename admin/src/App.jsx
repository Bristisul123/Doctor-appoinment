import React, { useContext } from "react";
import Login from "./pages/Login"; // now correctly importing the capitalized component
import { ToastContainer, toast } from 'react-toastify';
import { AppContext } from './context/AppContext'
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllApointments from "./pages/Admin/AllApointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import { DoctorContext } from "./context/DoctorContext";
import DoctorDashBoard from "./pages/Doctor/DoctorDashBoard";
import DoctorAppointment from "./pages/Doctor/DoctorAppointment";
import DoctorProfile from "./pages/Doctor/DoctorProfile";


const App = () => {

  const {aToken} = useContext(AdminContext)
  const {dToken} =  useContext(DoctorContext)

  return aToken || dToken? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes >
          {/* Admin  */}
          <Route path ='/' element ={<></>} />
          <Route path ='/admin-dashboard' element ={<Dashboard/>} />
          <Route path ='/all-appointments' element ={<AllApointments/>} />
          <Route path ='/add-doctor' element ={<AddDoctor/>} />
          <Route path ='/doctor-list' element ={<DoctorsList/>} />
          
          {/* Doctor */}
          <Route path ='/doctor-dashboard' element ={<DoctorDashBoard/>} />
          <Route path ='/doctor-appointment' element ={<DoctorAppointment/>} />
          <Route path ='/doctor-profile' element ={<DoctorProfile/>} />
        </Routes>
        
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
};

export default App;
