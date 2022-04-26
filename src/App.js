import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import acfLogo from './images/acfLogo.png';
// import {FaTwitter,FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa';
import { Routes, Route, Link } from 'react-router-dom'
import CreateTraining from './components/create-training.component'
import Home from './components/home.component'
import EditTraining from './components/edit-training.component'
import TrainingTable from './components/training-table.component'
import Footer from './components/Footer'
import BasicLevel from './components/basicLevel'


function App() {

  
  return (
    
    <div className="App">
      <header className="App-header">
      <Navbar>
            <Container>            
              <Navbar.Brand>             
              <div className='Logo'>
          <a href="#home"><img src={acfLogo} /></a>
              </div>
              </Navbar.Brand>
              <Nav className="justify-content-end">
              <Nav>                
              <Link to={'/'} className="nav-link">
                  Home
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

                <Nav>
                  <Link to={'/basicLevel'} className="nav-link">
                    Basic level Training
                  </Link>
                </Nav>
               
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
    <Routes>      
      <Route path="/" element={ <Home/> } />
      <Route path="/training-table" element={ <TrainingTable/> } />
      <Route path="/create-training" element={ <CreateTraining/> } />
       <Route path ="/basicLevel" element={<BasicLevel data={{"filters":{ "levelid":"Basic"}}}/>}/> 
    </Routes>
    </div>
            </Col>
          </Row>
        </Container>
        <Footer />
  </div>  
  )
}
export default App