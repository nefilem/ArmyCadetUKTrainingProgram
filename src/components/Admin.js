import React, { Component } from "react";

export default class Admin extends Component
{
    render() {
      return (
        <h2>
      Admin (Protected: authenticated user with role 'admin' required)
    </h2>
        );
    }
    }