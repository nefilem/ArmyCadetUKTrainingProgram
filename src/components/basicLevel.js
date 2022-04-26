import Dropdown from 'react-bootstrap/Dropdown';
import React, {Component, useState} from "react";
import Dashboard from '../dashboard'
import { ApiClient } from '../apiClient'

const client = new ApiClient()
export default class BasicLevel extends Component {
  
  

  render() {
    
    return (
<>
      <Dashboard client={client} />
    <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Subjects
  </Dropdown.Toggle>

  <Dropdown.Menu>
<Dropdown.Item href="#/action-2">Military Knowledge</Dropdown.Item>
<Dropdown.Item href="#/action-1"> Drill & Turnout</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Skill At Arms</Dropdown.Item>
    <Dropdown.Item >Shooting</Dropdown.Item>
    <Dropdown.Item>Navigation</Dropdown.Item>
    <Dropdown.Item>FieldCraft</Dropdown.Item>
    <Dropdown.Item>First Aid</Dropdown.Item>
    <Dropdown.Item>Expedition Training</Dropdown.Item>
    <Dropdown.Item>Physical Achievement</Dropdown.Item>
    <Dropdown.Item>Event</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</>
    )
  }
}



