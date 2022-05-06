import React, { useState, useEffect } from 'react';
//import { Route, Routes, Link, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './tabledata.css';
import Button from 'react-bootstrap/Button';

class UserTable extends React.Component {
  
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
		<div className = "App">
       <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
      <div ref={printRef}>    	
    <br/>
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
              <th>Children</th>
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
                  <Button variant="success" onMouseEnter={() => { this.props.handleEditClick(item.email); }}>
                    <Link to="/modify-user">Edit</Link>
                  </Button>
                  <Button variant="danger">Delete</Button>
                </td>
              </tr>
          ))}
        </tbody>
      </div>
		</div>
	);
}
}

// <Link to={{
//                     pathname: "/modify-user",
//                     state: { id: item._id }
//                   }}>Edit</Link>

export default UserTable;