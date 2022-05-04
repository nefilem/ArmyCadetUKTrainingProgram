import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './tabledata.css';
import Button from 'react-bootstrap/Button';


  

class TrainingTable extends React.Component {
  
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
"https://kgtrainingserver.herokuapp.com/schedule")
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
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
       <button type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
      <div ref={printRef}>
      <h3>Name </h3>
			<h1> Monthly Training Program </h1>     
      
      {/* <div className="mb-2">        
    <Button variant="primary" size="lg">
    Print
    </Button>{' '}
    </div>      */}
      <tbody>
                <tr>
                    <th>Days</th>
                    <th>Level</th>
                    <th>Subject</th>
                    <th>Lesson 1</th>
                    <th>Instructor</th>
                    <th>Subject 2</th>
                    <th>Lesson 2</th>
                    <th>Instructor 2</th>
                    <th>Dress</th>
                    <th>Equipment</th>
                </tr>
                {items.map((item, i) => (
                    <tr key={item._id}>
                       <td>{item.date}</td>
                       <td>{item.level}</td>
                        <td>{item.subject1 }</td>
                        <td>{item.lesson1}</td>
                        <td>{item.lesson1tutor}</td>
                        <td>{item.subject2 }</td>
                        <td>{item.lesson2}</td>
                        <td>{item.lesson2tutor}</td>
                        <td>{item.dress}</td>
                        <td>{item.equipment}</td>
                        
                    </tr>

                ))}
                </tbody>
                </div>
		</div>
	);
}
}

export default TrainingTable;