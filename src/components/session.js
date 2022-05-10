import React, { useState, useEffect } from 'react';
//import { Route, Routes, Link, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './tabledata.css';
import Footer from './Footer'
import greenlogo from '../images/greenlogo.png';
import CreateLessons from './create-seccion';
import PaginationComponent from './Pagination'; 

  

class TrainingSession extends React.Component {
  
// Constructor for month training
constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
}


// ComponentDidMount for
// fetch from db
componentDidMount() {
    fetch(
"https://kgtrainingserver.herokuapp.com/users")
        .then((res) => res.json())
        .then((json) => {
            this.setState({
                items: json,
                DataisLoaded: true
            });
        })
}

render() {
const printRef = React.createRef();

const handleDownloadPdf = async () => {
const element = printRef.current;
const canvas = await html2canvas(element);
// const data = canvas.toDataURL('image/png');

// const pdf = new jsPDF();
// const imgProperties = pdf.getImageProperties(data);
// const pdfWidth = pdf.internal.pageSize.getWidth();
// const pdfHeight =
//   (imgProperties.height * pdfWidth) / imgProperties.width;

// pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
// pdf.save('print.pdf');
};
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Please wait some time.... </h1> </div> ;

    return (
    <div className = "main">
   {/* <button type="button" className='pdf' onClick={handleDownloadPdf}>
    Download as PDF
  </button> */}
  <div ref={printRef} className='form'>    	
<br/>

<img src={greenlogo}></img> 
<h3>List of lessons</h3>
<br/>
<br/>      
  <tbody>                
      <tr>
          <th>Session</th>
          <th>Date</th>
          <th>Level</th>
          <th>Subject №1</th>         
          <th>instructor №1</th>                      
          <th>Equpment №1</th>
          <th>Dress №1</th>
          <th>Subject №2</th>         
          <th>instructor №2</th>                      
          <th>Equpment №2</th>
          <th>Dress №2</th>
          <th>Edit/Delete</th>
      </tr>
      {items.map((item, i) => (
      <tr key={item._id}>
             <th>1</th>
             <td>{item.role}</td>
             <td>{item.role}</td>
            <td>{item.role}</td>
            <td>{item.role}</td>
            <td>{item.level.join(", ")}</td>
            <td>{item.role}</td>
            <td>{item.role}</td>            
            <td>{item.role}</td>
            <td>{item.role}</td>
            <td>{item.children.join(", ")}</td> 
            {/* </tr>
             ))} */}
      {/* {items1.map((item, i) => (
          <tr key={item._id}>
             <th>First session</th>
            <td>{item.email}</td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.level.join(", ")}</td>
            <td>{item.role}</td>
            <td>{item.children.join(", ")}</td>                        
            <td>
            </tr> */}
            
        {/* <tr>  
          <th>Date</th>
          <th>2session</th>        
          <th>Level</th>
          <th>First lesson</th> 
          <th>Subject</th>         
          <th>instructor</th>                      
          <th>Equpment</th>
          <th>Dress</th>
          <th>2lesson</th>
          <th>Subject</th>         
          <th>instructor</th>                      
          <th>Equpment</th>
          <th>Dress</th>
          <th>Edit/Delete</th>
      </tr>
      
      {items.map((item, i) => (
          <tr key={item._id}>
             <th>2session</th>
             <td>{item.role}</td>
             <td>{item.role}</td>
             <td>{item.role}</td>
             <td>{item.role}</td>
            <td>{item.level.join(", ")}</td>
            <td>{item.role}</td>
            <td>{item.role}</td>
            <td>{item.role}</td>
            <td>{item.children.join(", ")}</td>                         */}
            <td>            
              <button className="btn_edit" onMouseEnter={() => { this.props.handleEditClick(item.email); }}>
                <Link className="btn_edit" to="/edit-lesson" >Edit</Link>
              </button>
              <button className='btn_delete'>Delete</button>
            </td>
          </tr>
      ))}
    </tbody>
  </div>
    </div>
);
}
}


            
<Footer /> 

export default TrainingSession;