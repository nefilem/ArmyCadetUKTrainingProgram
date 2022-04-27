import Dropdown from 'react-bootstrap/Dropdown';
import React, {Component, useState} from "react";
import Dashboard from '../dashboard';
import { ApiClient } from '../apiClient';
import SelectDate from './dateSelector';

const client = new ApiClient()



export default class BasicLevel extends Component {  
  
  displaySubjectDropDowns = () => {
    //let retData = [];
    const HandleSubject =()=>{
      const [subject, setsubject] = useState();}
    
  
    console.log("props.subjectData", this.props.subjectData)

    let retData = this.props.subjectData.map((data, i) => {
      return ( 
          <Dropdown.Item >
          {data}
          </Dropdown.Item>          
      );
    })    
  
    console.log(retData);

    return retData;
  }
  
  render() {     

    //console.log(this.props);
    
    this.props.changeSubjectID("Basic");

    console.log("prop", this.props.subjectData);

    if (this.props.subjectData === undefined) { return }
    return (
      <>
            <Dashboard client={client} />
          <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Subjects
        </Dropdown.Toggle>
      
        <Dropdown.Menu>
          {this.displaySubjectDropDowns()}   
        </Dropdown.Menu>
      </Dropdown>

      <SelectDate/>
      </>        
    )
}
  

}



