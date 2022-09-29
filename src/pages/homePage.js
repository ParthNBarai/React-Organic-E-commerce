import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './card'
import logo from '../assets/images/person-circle.svg'
import Carousal from './carousal'
import Navbar from '../pages/navbar'
import {getProducts} from '../services/products'

function HomePage() {

  useEffect(() => {
    getProducts()
    // eslint-disable-next-line
}, [])
  // const datas= getProducts();
  // console.log("here")
  // console.log(datas)

  const [item,setItem] = useState({})
  return (
    <>
      <Navbar />
      <Carousal />
      <div className="container my-3">
        <h2>More Popular</h2>
        <div className="row">
          {/* <div className="col-md-3">
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
          </div> */}

{item.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <Card image={logo} name={element.name}/>
                            </div>
                        })}
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

export default HomePage