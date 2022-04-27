import React,{useState, useEffect} from 'react'
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
import AddSubject from './components/createSubject'

import Home from './components/home.component'


import Footer from './components/Footer'
import BasicLevel from './components/basicLevel'
import { ApiClient } from './apiClient'

function App() {
  const [subjectData, cSubjectData] = useState([]);
  const [subjectID, cSubjectID] = useState([]);

  let client = new ApiClient();
  
  function changeSubjectID(data) {    
    console.log("changeSubjectID", data)
     cSubjectID(data);
  }

  useEffect( () => {
    console.log("useEffect");
    client.subjectsbylevel(subjectID)
    .then((response) => {      
      cSubjectData(response.data);
    });   
  }, [subjectID]);

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
                  <Link to={'/createSubject'} className="nav-link">
                    Create Subject
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
      <Route path ="/createSubject" element={<AddSubject/>}/>
     
      <Route path ="/basicLevel" element={<BasicLevel subjectData={subjectData} changeSubjectID={(data) => changeSubjectID(data)}/>}/>
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