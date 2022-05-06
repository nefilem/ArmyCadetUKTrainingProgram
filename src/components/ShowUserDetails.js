import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
// import mongoose from 'mongoose';
// var mongoose = require('mongoose')

class ShowUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      props:props
    };
  }

  // componentDidMount() {
  //   // console.log("Print id: " + this.props.match.params.id);
  //   console.log(this.state.props)
  //   axios
  //     .post('http://kgtrainingserver.herokuapp.com/users/showfiltered',{ filters: { "_id": mongoose.Types.ObjectId() } })
  //     .then(res => {
  //       // console.log("Print-showBookDetails-API-response: " + res.data);
  //       this.setState({
  //         user: res.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log("Error from ShowUserDetails");
  //     })
  // };

  // onDeleteClick (id) {
  //   axios
  //     .delete('http://kgtrainingserver.herokuapp.com/users/'+id)
  //     .then(res => {
  //       this.props.history.push("/");
  //     })
  //     .catch(err => {
  //       console.log("Error form ShowUserDetails_deleteClick");
  //     })
  // };


  render() {

    const user = this.state.user;
    let UserItem = <div>
      <table className="table table-hover table-dark">
        {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>firstname</td>
            <td>{ user.firstname }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>lastname</td>
            <td>{ user.lastname }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>email</td>
            <td>{ user.email }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>password</td>
            <td>{ user.password }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>dateCreated</td>
            <td>{ user.dateCreated }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>role</td>
            <td>{ user.role }</td>
          </tr>
        </tbody>
      </table>
    </div>

    return (
      <div className="ShowUserDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show User List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">User's Record</h1>
              <p className="lead text-center">
                  View User's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { UserItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,user._id)}>Delete User</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-user/${user._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit User
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}

        </div>
      </div>
    );
  }
}

export default ShowUserDetails;