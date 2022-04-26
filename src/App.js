import React from 'react'
import { Route, Routes, Link, Navigate } from "react-router-dom";
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
import LessonsTable from './components/lessons-table.component'
import Footer from './components/Footer'
import Signup from "./components/Singup";
import Login from "./components/Login";
import Main from "./components/Main";

function App() {
  const user = localStorage.getItem("token");
  return (
    
    <div className="App">
      {/* <header className="App-header">
      <Navbar>
            <Container>            
              <Navbar.Brand>             
              <div className='logo'>
              <a href="#home"><img src={acfLogo}/></a>
              </div>
              </Navbar.Brand>
              <Nav className="justify-content-end">
              <Nav>                
              <Link to={'/'} className="nav-link">
                  Home
                </Link>
                </Nav>
                <Nav>                
                  <Link to={'/lessons-table'} className="nav-link">
                   Lessons table
                  </Link>
                </Nav>
              <Nav>                
                  <Link to={'/training-table'} className="nav-link">
                   Training table
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/create-training'} className="nav-link">
                    Create  Training table
                  </Link>
                </Nav>
               
              </Nav>
            </Container>
          </Navbar>
        </header> */}
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
    <Routes>  
    {user && <Route path="/" exact element={<Main />} />}
    {user && <Route path="/lessons-table" exact element={<LessonsTable />} />}
    {user && <Route path="/training-table" exact element={<TrainingTable />} />} 
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />  
      
    </Routes>
    </div>
            </Col>
          </Row>
        </Container>
       
  </div>  
  )
}
export default App