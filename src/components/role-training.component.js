// import React, { useState, useEffect } from 'react';
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
// import './tabledata.css';
// import Header from './Header'
// import Footer from './Footer'
// import RecordList from './recordList'
// import ShowUserDetails from './ShowUserDetails'
// import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
//import { Route, Routes, Link, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './tabledata.css';
import Footer from './Footer'
import greenlogo from '../images/greenlogo.png'

  

class TrainingRole extends React.Component {
  
// 	// Constructor for month training
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			DataisLoaded: false
// 		};
// 	}
  
  
// 	// ComponentDidMount for
// 	// fetch from db
// // 	componentDidMount() {
// // 		fetch(
// // "https://kgtrainingserver.herokuapp.com/schedule")
// // 			.then((res) => res.json())
// // 			.then((json) => {
// // 				this.setState({
// // 					items: json,
// // 					DataisLoaded: true
// // 				});
// // 			})
// // 	}

// 	render() {   

  
// 		// const { DataisLoaded, items } = this.state;
// 		// if (!DataisLoaded) return <div>
// 		// 	<h1> Pleses wait some time.... </h1> </div> ;

// 		return (
// 		<div className = "App">
           
//       <div>
//       <br/>
// 	<h2>Users list of roles on training program: </h2>
// <br/>
// <br/>
// <row>
// <div className ="col-6 mx-auto">
// <tbody>
//                 <tr>
//                     <th colspan="2">user</th>
//                     <th colspan="3">Detachment Commander</th>
//                     <th colspan="2">Training Officer</th>
//                     <th colspan="2">Parent</th>
//                     <th colspan="2">Cadet</th>
//                     <th colspan="2">Instructor / cadet NCO</th>
//                     </tr>
//                     <tr>
//                     <th colspan="2">0</th>
//                     <th colspan="2">1</th>
//                     <th colspan="2">2</th>
//                     <th colspan="2">3</th>
//                     <th colspan="2">4</th>
//                     <th colspan="2">5</th>
//                     </tr>
// </tbody>
// <br/>
// <br/>
// </div>

// </row>
//       {/* <tbody>
//                 <tr>
//                     <th colspan="2">Detachment Name</th>
//                     <th colspan="2">Detachment Name</th>                    
//                 </tr>
//                 <tr>
//                     <th colspan="2">Training Program Start Dates</th>
//                     <th>1/2/2017</th> 
//                     <th>1/4/2017</th>                    
//                 </tr>
//                 <tr>
//                     <th>Instructors</th>
//                     <th>Dress</th> 
//                     <th>Equipment</th>
//                     <th>Non Syllabus Lessons</th>                      
//                 </tr>
//                 {items.map((item, i) => (
//                     <tr key={item._id}>
//                        <td>{item.lesson1tutor}</td>
//                         <td>{item.dress}</td>
//                         <td>{item.equipment}</td>
//                         <td>{item.lesson2}</td>
                        
//                     </tr>

//                 ))}
//                 </tbody> */}
//                 {/* <ShowUsersList/> */}
//                 <RecordList/>
//                 {/* <ShowUserDetails/> */}
//                 </div>
//                 <Footer /> 
// 		</div>
// 	);
// }
// }
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
const data = canvas.toDataURL('image/png');

const pdf = new jsPDF();
const imgProperties = pdf.getImageProperties(data);
const pdfWidth = pdf.internal.pageSize.getWidth();
const pdfHeight =
  (imgProperties.height * pdfWidth) / imgProperties.width;

pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
pdf.save('print.pdf');
};
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Please wait some time.... </h1> </div> ;

    return (
    <div className = "main">
   <button type="button" className='pdf' onClick={handleDownloadPdf}>
    Download as PDF
  </button>
  <div ref={printRef} className='form'>    	
<br/>
<img src={greenlogo}></img>
<h3>User list</h3>
<br/>
<br/>      
  <tbody>                
      <tr>
          <th>Email</th>
          <th>First Name</th> 
          <th>Last Name</th>
          <th>Level</th>
          <th>Role</th>                      
          <th>Permissions</th>
          <th>Controls</th>
      </tr>
      {items.map((item, i) => (
          <tr key={item._id}>
            <td>{item.email}</td>
            <td>{item.firstname}</td>
            <td>{item.lastname}</td>
            <td>{item.level.join(", ")}</td>
            <td>{item.role}</td>
            <td>{item.children.join(", ")}</td>                        
            <td>
              <button className="btn_edit" onMouseEnter={() => { this.props.handleEditClick(item.email); }}>
                <Link className="btn_edit" to="/modify-user" >Edit</Link>
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

// 	// Constructor for month training
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			items: [],
// 			DataisLoaded: false
// 		};
// 	}


// 	// ComponentDidMount for
// 	// fetch from db
// 	componentDidMount() {
// 		fetch(
// "https://kgtrainingserver.herokuapp.com/schedule")
// 			.then((res) => res.json())
// 			.then((json) => {
// 				this.setState({
// 					items: json,
// 					DataisLoaded: true
// 				});
// 			})
// 	}

// 	render() {
//     const printRef = React.createRef();

//   const handleDownloadPdf = async () => {
//     const element = printRef.current;
//     const canvas = await html2canvas(element);
//     const data = canvas.toDataURL('image/png');

//     const pdf = new jsPDF();
//     const imgProperties = pdf.getImageProperties(data);
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight =
//       (imgProperties.height * pdfWidth) / imgProperties.width;

//     pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
//     pdf.save('print.pdf');
//   };
// 		const { DataisLoaded, items } = this.state;
// 		if (!DataisLoaded) return <div>
// 			<h1> Pleses wait some time.... </h1> </div> ;

// 		return (
// 		<div className = "App">
//        <button type="button" onClick={handleDownloadPdf}>
//         Download as PDF
//       </button>
//       <div ref={printRef}>
//       <h3>Name </h3>
// 			<h1> Monthly Training Program </h1>     
  
//       {/* <div className="mb-2">        
//     <Button variant="primary" size="lg">
//     Print
//     </Button>{' '}
//     </div>      */}
//       <tbody>
//                 <tr>
//                     <th>Days</th>
//                     <th>Level</th>
//                     <th>Subject</th>
//                     <th>Lesson 1</th>
//                     <th>Instructor</th>
//                     <th>Subject 2</th>
//                     <th>Lesson 2</th>
//                     <th>Instructor 2</th>
//                     <th>Dress</th>
//                     <th>Equipment</th>
//                 </tr>
//                 {items.map((item, i) => (
//                     <tr key={item._id}>
//                        <td>{item.date}</td>
//                        <td>{item.level}</td>
//                         <td>{item.subject1 }</td>
//                         <td>{item.lesson1}</td>
//                         <td>{item.lesson1tutor}</td>
//                         <td>{item.subject2 }</td>
//                         <td>{item.lesson2}</td>
//                         <td>{item.lesson2tutor}</td>
//                         <td>{item.dress}</td>
//                         <td>{item.equipment}</td>
                    
//                     </tr>

//                 ))}
//                 </tbody>
            
            <Footer /> 

export default TrainingRole;