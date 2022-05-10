import React, { useState } from 'react'
import { Routes, Route, Link,Outlet, Navigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import acfLogo from './images/acfLogo.png';
// import {FaTwitter,FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa';
import CreateTraining from './components/create-training.component'
import Home from './components/home.component'
import EditTraining from './components/edit-training.component'
import TrainingTable from './components/training-table.component'
import UserTable from './components/user-table.component';
import EditUser from './components/user-edit.component';
import LessonsTable from './components/lessons-table.component'
import Footer from './components/Footer'
import Signup from "./components/Singup";
import Login from "./components/Login";
import Main from "./components/Main";
import EditSesion from './components/editsession'
import TrainingSession from './components/editsession'
import ProtectedRoute from './components/ProtectedRoute'
// import Home from './components/Home'
import TrainingRole from './components/role-training.component'
import CommanderLessons from './components/commander'
import Admin from './components/Admin'
import Navigation from './components/Navigation'
import Header from './components/Header'
const App = () => {
  const usertoken = localStorage.getItem("token");
  const [editEmailID, cEditEmailID] = useState("");
  function handleEditClick(emailID) {
    cEditEmailID(emailID);
  }
  const [user, setUser] = React.useState(null);
  const handleLogin = () =>
    setUser({
      id: '1',
      name: 'robin',
      permissions: ['cadet'],
      roles: ['admin'],
      // roles:['user'],
    });
  const handleLogout = () => setUser(null);
  return (
    <>
    
    <div className="App">
    <header className="App-header">
      {/* <Navigation /> */}
      <Header /> 
      {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
              )}
    
    </header> 
    
    
  <div className="wrapper">
<Routes>
 <Route index element={<Main />} />
 <Route path="login" element={<Login />} />
 <Route element={<ProtectedRoute isAllowed={!!user} />}>
 <Route path="home" element={<Main />} />
 <Route path="training-table" element={<TrainingTable />} />
</Route>
<Route
       path="lessons-table"
        element={
          <ProtectedRoute
           redirectPath="/home"
           isAllowed={
             !!user && user.permissions.includes('cadet')
           }
          >
            <LessonsTable />
        </ProtectedRoute>
   }
    />
     <Route
         path="role"
      element={
         <ProtectedRoute
           redirectPath="/home"
            isAllowed={!!user && user.roles.includes('admin')}
        >
              <TrainingRole />
         </ProtectedRoute>
       }
      />
      <Route
         path="modify-user"
      element={
         <ProtectedRoute
           redirectPath="/home"
            isAllowed={!!user && user.roles.includes('admin')}
        >
              <EditUser />
         </ProtectedRoute>
       }
      />
      <Route
         path="comander"
      element={
         <ProtectedRoute
           redirectPath="/home"
            isAllowed={!!user && user.roles.includes('admin')}
        >
                <CommanderLessons />
         </ProtectedRoute>
       }
      />
      <Route
         path="edit-lesson"
      element={
         <ProtectedRoute
           redirectPath="/home"
            isAllowed={!!user && user.roles.includes('admin')}
        >
              <EditSesion />
         </ProtectedRoute>
       }
      />
       <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes> 
      </div>
           
  </div>  
      </>
      
  );
 }
export default App
