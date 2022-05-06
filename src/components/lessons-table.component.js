import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import './tabledata.css';
import Button from 'react-bootstrap/Button';
import greenlogo from '../images/greenlogo.png'



  

class LessonsTable extends React.Component {
  
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
		<div className = "main">
       <button className='pdf' type="button" onClick={handleDownloadPdf}>
        Download as PDF
      </button>
      <div ref={printRef} className="form">
      <br/>
      <img src={greenlogo}></img>
	<h2>Humberside and South Yorkshire ACF </h2>  
    <br/>
<h3>Automated Detachment Training Program   </h3>
<br/>
<br/>
      
      <tbody>
                <tr>
                    <th colspan="2">Detachment Name</th>
                    <th colspan="2">Detachment Name</th>                    
                </tr>
                <tr>
                    <th colspan="2">Training Program Start Dates</th>
                    <th>1/2/2017</th> 
                    <th>1/4/2017</th>                    
                </tr>
                <tr>
                    <th>Instructors</th>
                    <th>Dress</th> 
                    <th>Equipment</th>
                    <th>Non Syllabus Lessons</th>                      
                </tr>
                {items.map((item, i) => (
                    <tr key={item._id}>
                       <td>{item.lesson1tutor}</td>
                        <td>{item.dress}</td>
                        <td>{item.equipment}</td>
                        <td>{item.lesson2}</td>
                        
                    </tr>

                ))}
                </tbody>
                </div>
                <Footer /> 
		</div>
	);
}
}

export default LessonsTable;