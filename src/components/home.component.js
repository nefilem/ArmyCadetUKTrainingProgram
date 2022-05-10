import React, { Component } from "react";
import Footer from './Footer';
import armystudents from '../images/armystudents.png';
import army from '../images/army.jpg';
import armyadventure from '../images/armyadventure.png';
import armyhistory from '../images/armyhistory.png';
import { Carousel } from "react-bootstrap";
import './home.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Home1 extends Component {
  render() {
    return (
      <>
      <div className="mainHome">
        <Container>
  <Row>
    <div className="title">
    
			<div className="arrow-4"></div>
		
		
  <h1>Training Program Army Cadets UK</h1>
  </div>
    <Carousel className="carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={army}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={armystudents}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={armyadventure}
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={armyhistory}
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel></Row>
    
  </Container>
  
      </div>
      <Container>
      <div>
        <Row>
          
    <div className="description">
      <h2>This project allows the creation of a monthly training program.</h2> <p>The program creation is restricted. Everyone needs to login to view the required information.  Allows only the detachment commander to select, edit and create the training program.
        Training officer can present training program to detachment commander. Detachment commander can select lessons, dress, equipment and 
        for each training period from an available list. Cadets and parents can only veiw the training program.
        
The Army Cadet Force is an MOD sponsored youth organisation who run military themed training for 12-18 year olds. Cadets can Earn nationally recognised qualifications along side the ACF syllabus.
There are a number of subjects in the syllabus each with a number of lessons. There are different levels of training that progress in difficulty. Not all subjects are covered at each level.
Most training is conducted at detachments for which this system is designed. Detachments run training evenings typically consisting or 2 session on each evening. They will run training for several groups (grouped by level) at the same time. Each group and session could be on a different subject.
</p>
</div>
  </Row>
      </div>
      </Container>
      </>
    );
  }
}