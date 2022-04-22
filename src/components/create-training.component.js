import React, {Component} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


export default class CreateTraining extends Component {
  render() {
    return (<div class="form-wrapper">
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Level</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlId="Instructor">
          <Form.Label>Instructor</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlId="Equpment">
          <Form.Label>Equpment</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit">
          Create Training
        </Button>
      </Form>
    </div>);
  }
}