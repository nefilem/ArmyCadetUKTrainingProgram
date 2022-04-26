import React, { Component } from "react";
import './FooterStyles.css'
import { Route, Routes, Link, Navigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaTwitter,FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa';
import acfLogo from '../images/acfLogo.png';


export default class Header extends Component
{
    render() {
      return (
<header className="App-header">
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
  </header>
   );
}
}