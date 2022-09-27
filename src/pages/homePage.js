import React from 'react'
import Card from './card'
import logo from '../assets/images/person-circle.svg'
import Carousal from './carousal'
import Navbar from '../pages/navbar'

function homePage() {
  return (
    <>
      <Navbar />
      <Carousal />
      <div className="container my-3">
        <h2>More Popular</h2>
        <div className="row">
          <div className="col-md-3">
            <Card image={logo} name="plant1" />
          </div>
          <div className="col-md-3">
            <Card image={logo} name="plant2" />
          </div>
          <div className="col-md-3">
            <Card image={logo} name="plant3" />
          </div>
          <div className="col-md-3">
            <Card image={logo} name="plant4" />
          </div>
        </div>
      </div>

      <div className="container my-3">
        <h2>All</h2>
        <div className="row">
          <div className="col-md-3">
            <Card image={logo} name="plant1" />
          </div>
          <div className="col-md-3">
            <Card image={logo} name="plant2" />
          </div>
          <div className="col-md-3">
            <Card image={logo} name="plant3" />
          </div>
          <div className="col-md-3">
            <Card image={logo} name="plant4" />
          </div>
        </div>
      </div>
    </>
  )
}

export default homePage