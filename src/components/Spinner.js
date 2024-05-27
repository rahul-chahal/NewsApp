import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <span className="loader"></span>
      </div>
    )
  }
}
