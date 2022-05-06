import React, { Component } from "react";

export default class Analytics extends Component
{
    render() {
      return (
        <h2>
        Analytics (Protected: authenticated user with permission
        'analyze' required)
      </h2>
        );
    }
    }