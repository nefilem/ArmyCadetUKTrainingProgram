import React, { Component } from "react";
import './FooterStyles.css'
import {FaTwitter,FaFacebook,FaInstagram,FaYoutube} from 'react-icons/fa';
import acfLogo from '../images/acfLogo.png';


export default class Footer extends Component
{
    render() {
      return (
        <div className ="flex-container">
  <div className= 'logo'> <img src = {acfLogo}></img> </div>
  <div className='footerIcons'><FaTwitter/> <FaFacebook/> <FaInstagram/> <FaYoutube/></div>
  <div className='footerMain'><ul><li>Army Cadet Webstore</li><li>Cookie Policy</li><li>Cadet Portal</li><li>Brand Center</li><li>Privacy Policy</li><li>Counties</li></ul></div>
      <footer className="c-footer"></footer>
      </div>
      );
    }
  }

