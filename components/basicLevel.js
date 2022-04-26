import Dropdown from 'react-bootstrap/Dropdown';
import React, {useState} from "react";
import Dashboard from '../dashboard'
import { ApiClient } from '../apiClient'
import DateSelect from './datepicker';



const client = new ApiClient()



const BasicLevel =()=>  { 
  
  


  
  displaySubjectDropDowns = () => {
    //let retData = [];
  
    console.log("props.subjectData", this.props.subjectData)

    let retData = this.props.subjectData.map((data, i) => {
      return ( 
          <Dropdown.Item href={`"#/action-${i}"`}>
          {data}
          </Dropdown.Item>          
      );
    })    
  
    console.log(retData);

    return retData;
  }
    

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
<DateSelect/>
      
      </>  
      
      
    )
}

export default BasicLevel



