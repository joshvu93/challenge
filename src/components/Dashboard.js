import React, { Component } from 'react'
import Students from './Students';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <Students />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard