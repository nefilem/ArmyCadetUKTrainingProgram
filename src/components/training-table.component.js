import React, { useState, useEffect } from 'react';
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
"http://localhost:3000/schedule")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "App">
			<h1> Monthly Training Program </h1>
      
      <div className="mb-2">        
    <Button variant="primary" size="lg">
    Print
    </Button>{' '}
    </div>     
      <tbody><tr> 
        <th>
        <h3>1 WEEK </h3> 
        </th>            
                </tr>
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
                       <td>{item.levelid}</td>
                        <td>{item.detachmentid }</td>
                        <td>{item.lesson1id}</td>
                        <td>{item.lesson1tutorid}</td>
                        <td>{item.detachmentid }</td>
                        <td>{item.lesson2id}</td>
                        <td>{item.lesson2tutorid}</td>
                        <td>{item.dresscode}</td>
                        <td>{item.equipmentcode}</td>
                        
                    </tr>

                ))}
                </tbody>
		</div>
	);
}
}

export default TrainingTable;