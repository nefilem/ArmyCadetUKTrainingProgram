// import React, { useState, useEffect } from 'react';
// import { Form } from 'react-bootstrap';
// //import { Route, Routes, Link, Navigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import html2canvas from 'html2canvas';
// import { jsPDF } from 'jspdf';
 import './tabledata.css';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';
// //import { ObjectId } from 'mongodb';

// class EditUser extends React.Component {
  
// 	// Constructor for month training
// 	constructor(props) {
// 		super(props);
// 		this.state = {			
//       _id : "",
//       email: "",
//       originalemail: "",
//       rank: "",
//       firstname: "",
//       lastname: "",
//       role: 1,
//       level: [],
//       password: "",
//       children: [],
// 			DataisLoaded: false
// 		};
// 	}
  
//   handleChange(event) {
//     const newState = {...this.state};        
     
//     console.log("handleChange()", newState);
//     switch (event.target.type)
//     {
//         case "checkbox":
//             newState[event.target.id] = Boolean(event.target.checked);        
//             break;
//         case "number":
//             newState[event.target.id] = Number(event.target.value);
//             break;
//         default:
//             console.log("target", event.target.id)
//             newState[event.target.id] = event.target.value;    
//             console.log("newstate",newState);
//             break;
//     }
        
//       this.setState({
//           _id : newState._id,
//         email: newState.email,
//         originalemail: newState.originalemail,
//         rank: newState.rank,
//         firstname: newState.firstname,
//         lastname: newState.lastname,
//         role: newState.role,
//         level: newState.level,
//         password: newState.password,
//         children: newState.children,
//         DataisLoaded: newState.DataisLoaded
//         //items: newState.items,
//         //DataisLoaded: newState.DataisLoaded
// 			})      
//       console.log("state",this.state);
//       // .catch((error) => {
//       //   console.log(error);
//       // })
//   }

//   postItems(url, dataToPost) {
//     //console.log("dataToPost", dataToPost);
//     return axios
//     .post(url, dataToPost)
//     .then(this.responseStatusCheck)
//     .catch((error) => {
//        console.log(error);
//     });
//   }

//   submitHandler = (e) => {
//     e.preventDefault();  
//     /*let errorText = [];
//     if (this.state.id === null || state.id === ""|| state.id === undefined) { errorText.push("ID"); }
//     if (this.state.name === null||state.name === ""||state.name === undefined) { errorText.push("Event name"); }
//     if (this.state.location === null||state.location === ""||state.location === undefined) { errorText.push("Location"); }
//     if (this.state.datetime === null||state.datetime === ""||state.datetime === undefined) { errorText.push("Date/Time"); }
//     if (this.state.precis === null||state.precis === ""||state.precis === undefined) { errorText.push("Description"); }
//     if (this.state.creator === null||state.creator === undefined) { errorText.push("Creator");}
//     if (this.errorText.length>0) { 
//         //toastr.error(errorText.join(" and ") + " is missing", "Error"); 
//     } else {        
//         //props.amendList(state.id, state.name, state.location, state.datetime, state.precis, state.creator);
//         // 0 above is creator, needs to change for authorisation functionality
//         //toastr.success("Your post was added!", "Success");

//         // need to navigate back to the view screen now
//         //navigate("/view");
//     } */
//     axios.post("http://kgtrainingserver.herokuapp.com/users/modify", 
//                 { "rank": this.state.rank,
//                   "firstname": this.state.firstname,
//                   "lastname": this.state.lastname,
//                   "email": this.state.email,
//                   "originalemail": this.state.originalemail,
//                   "password": this.state.password,
//                   "role": this.state.role,
//                   "level": this.state.level,
//                   "children": this.state.children
//                 })
//                 .then((response) => {
//                   console.log("posted ok");
//                 });
                
// }    

// 	// ComponentDidMount for
// 	// fetch from db
// 	componentDidMount() {
//     if (this.state.DataisLoaded === false) {
//     this.postItems("https://kgtrainingserver.herokuapp.com/users/showfiltered", 
//                    { "filters": { "email": this.props.emailID } })
//     .then((response) => {
//       console.log("state",response.data[0])
// 			this.setState({        
//         _id : response.data[0].id,
//         email: response.data[0].email,
//         originalemail: response.data[0].email,
//         rank: response.data[0].rank,
//         firstname: response.data[0].firstname,
//         lastname: response.data[0].lastname,
//         role: response.data[0].role,
//         level: response.data[0].level,
//         password: response.data[0].password,
//         children: response.data[0].children,
//         DataisLoaded: true
// 			})        
//      })
//    }
//   }
// // 		fetch(
// // "https://kgtrainingserver.herokuapp.com/users/showfiltered", { "filters": { "email": this.props.email } } )
// // 			.then((res) => res.json())
// // 			.then((json) => {
// //         console.log(json)
// // 				this.setState({
// // 					items: json,
// // 					DataisLoaded: true
// // 				});
// // 			})

// 	render() {
//     //console.log("pigbob",this.state.items);
// 		return (
//       <div class="form-wrapper">
//       <Form onSubmit={ (e) => this.submitHandler(e) }>
//         <Form.Group controlId="email">
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control type="text" value={this.state.email} onChange={(e) => this.handleChange(e)}/>          
//         </Form.Group>
//         <Form.Group controlId="rank">
//           <Form.Label>Rank</Form.Label>
//           <Form.Control type="text" value={this.state.rank} onChange={(e) => this.handleChange(e)}/>
//         </Form.Group>
//         <Form.Group controlId="firstname">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control type="text" value={this.state.firstname} onChange={(e) => this.handleChange(e)}/>
//         </Form.Group>
//         <Form.Group controlId="lastname">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control type="text" value={this.state.lastname} onChange={(e) => this.handleChange(e)}/>
//         </Form.Group>
//         <Form.Group controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control type="text" value={this.state.password} onChange={(e) => this.handleChange(e)}/>
//         </Form.Group>
//         <Form.Group controlId="level">
//           <Form.Label>Level</Form.Label>
//           <Form.Control type="text" value={this.state.level} onChange={(e) => this.handleChange(e)}/>
//         </Form.Group>
//         <Form.Group controlId="role">
//           <Form.Label>Role</Form.Label>
//           <Form.Control type="number" value={this.state.role} onChange={(e) => this.handleChange(e)}/>
//         </Form.Group>
//         <Form.Group controlId="parents">
//           <Form.Label>Parents of</Form.Label>
//           <Form.Control type="text" value={this.state.parents} onChange={(e) => this.handleChange(e)}/>
//         </Form.Group>
//         <Button variant="success" size="lg" block="block" type="submit">
//           Create Training
//         </Button>
//       </Form>
//     </div>
//   );	
// }
// }

// export default EditUser;
import React, { Component, useState, useEffect } from "react";
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Footer from './Footer'
import { useParams, Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { IoIosArrowDown} from "react-icons/io";




function withRouter(Component) {
  function ComponentWithRouter(props) {
    let params = useParams()
    // console.log(params)
    return <Component {...props} params={params} />
  }
  return ComponentWithRouter
}


class EditUser extends Component { 
  
constructor(props) {
  super(props)
  this.onChangeEventName = this.onChangeEventName.bind(this);
  this.onChangeEventLocation = this.onChangeEventLocation.bind(this);
  this.onChangeEventInformation = this.onChangeEventInformation.bind(this);
  this.onChangeEventEmail = this.onChangeEventEmail.bind(this);
  this.onChangeEventRollno = this.onChangeEventRollno.bind(this);
  // this.onChangeEventID = this.onChangeEventID.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  

// State
 this.state = {
  name: '',
  location:'',
  information:'',
  email: '',
  rollno: '',
  id: this.props.params.id
  
  }
 }
 
 componentDidMount() {    
  axios.get('https://kgtrainingserver.herokuapp.com/users/'+ this.props.params.id)
 .then(res => {
  this.setState({
  name: res.data.name,
  location: res.data.location,
  information: res.data.information,
  rollno: res.data.rollno
     });
     console.log(res)  
  })
.catch((error) => {
   console.log(error);
   })
 }
onChangeEventName(e) {
this.setState({ name: e.target.value })
 }

 onChangeEventLocation(e) {
 this.setState({ location: e.target.value })
  }
onChangeEventInformation(e) {
 this.setState({ information: e.target.value })
}
 onChangeEventEmail(e) {
 this.setState({ email: e.target.value })
}
 onChangeEventRollno(e) {
 this.setState({ rollno: e.target.value })
 }
onSubmit(e) {
 e.preventDefault()
  const eventObject = {
  name: this.state.name,
  location: this.state.location,
  information: this.state.information,
  rollno: this.state.rollno
  };

 axios.put('https://kgtrainingserver.herokuapp.com/users/update-event/' + this.props.params.id, eventObject)
 .then((res) => {
   console.log("id", this.props.params.id)
   console.log(res.data)
    console.log('Events successfully updated')
    }).catch((error) => {
     console.log(error)
   })
   // Redirect to Event List 
   alert("Event updated successfully !")
  this.props.history.push('/')
  
 }
 



render() {
  
  
      
   return (
     <>
    <div className='main'>
   <div className="form-wrapper">
     <Container>
         <div className='heading'>
         <IconContext.Provider value={{size:"70"
					}}>
						<div className="arrow">
						<IoIosArrowDown />
						</div>
						</IconContext.Provider>
           <h2 >Edit user</h2></div>
  <Form  className='formEdit' onSubmit={this.onSubmit}>
    <Form.Group className="text1" controlId="Name">
       <Form.Label>Name</Form.Label>
          <Form.Control className="text" type="text" value={this.state.name} onChange={this.onChangeEventName} />
       </Form.Group>
    <Form.Group className="text1" controlId="Information">
      <Form.Label>Surname</Form.Label>
    <Form.Control  className="text" type="text" value={this.state.information} onChange={this.onChangeEventInformation} />
  </Form.Group>
  <Form.Group className="text1" controlId="Location">
  <Form.Label>Role</Form.Label>
     <Form.Control className="text" type="text" value={this.state.location} onChange={this.onChangeEventLocation} />
</Form.Group>
<Form.Group className="text1" controlId="Roll No">
<Form.Label>Permissions</Form.Label>
 <Form.Control  className="text" type="text" value={this.state.rollno} onChange={this.onChangeEventRollno} />
 </Form.Group>
 <br/>
  <Button className="btn_create" variant="danger" size="lg" block="block" type="submit">
  Update
 </Button>
 
 <Button className="btn_create" href="/" variant="success" size="lg" block="block" type="submit">
   Back
 </Button>
 </Form>
 </Container>
 </div>
 </div>
 <Footer /> 
 </>
 );
  }
 }
const HOCEditUser = withRouter(EditUser);

 export default HOCEditUser;