import React, { Component } from "react";
import Footer from './Footer';
import army from '../images/army.jpg';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Training Program Army Cadets UK</h2>
        <Container>
  <Row>
    <Col><img src={army}/></Col>
    <Col>
    <p>This project is the creation of a monthly training program. The program creation should be controlled allowing only the selection of lessons available within a subject area at the selected level.
To extend the project the different types of access to the resulting program and who is able to create a program can be tackled.
The Army Cadet Force is an MOD sponsored youth organisation who run military themed training for 12-18 year olds. Cadets can Earn nationally recognised qualifications along side the ACF syllabus.
There are a number of subjects in the syllabus each with a number of lessons. There are different levels of training that progress in difficulty. Not all subjects are covered at each level.
Most training is conducted at detachments for which this system is designed. Detachments run training evenings typically consisting or 2 session on each evening. They will run training for several groups (grouped by level) at the same time. Each group and session could be on a different subject.</p></Col>
  </Row>
  </Container>
        
        
      </div>
    );
  }
}