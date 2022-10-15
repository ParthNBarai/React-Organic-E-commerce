import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './card'
import logo from '../assets/images/person-circle.svg'
import Carousal from './homeCarousal'
import Navbar from '../pages/navbar'
import homelogo from '../assets/images/home-logo.png'


function HomePage() {
  const [item, setItem] = useState([])
  const [allitem, setAllItem] = useState([])
  const [isloading, setLoading] = useState(true)
  let getProducts = async () => {


    try {
      // console.log(localStorage.getItem('auth-token'))
      var response = await fetch('/product/get', {
        method: "GET",
        headers: { "Content-Type": "application/json", "token": localStorage.getItem('auth-token') },

      })

      const data = await response.json()
      // console.log(data)
      setItem(data)
      setLoading(false)
      // console.log(item)

    } catch (error) {
      console.log(error)
    }

  }

  let getAllProducts = async () => {


    try {
      // console.log(localStorage.getItem('auth-token'))
      var response = await fetch('product/get/all', {
        method: "GET",
        headers: { "Content-Type": "application/json", "token": localStorage.getItem('auth-token') },

      })

      const data = await response.json()
      console.log("data")
      console.log(data)
      setAllItem(data)
      setLoading(false)
      // console.log(item)

    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getProducts()
    getAllProducts()
    // console.log(item)
  }, [])
  // const datas= getProducts();
  // console.log("here")
  // console.log(datas)

  if (isloading) {
    return (<div className="text-center spinner">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>)
  }

  return (
    <>
      <Navbar />
      <Carousal />
      <div className="container my-3">
        <h2>More Popular</h2>
        <div className="row">

          {item.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <Card image={element.images[1]} name={element.name} id={element._id} price={element.price} />
            </div>
          })}
        </div>
      </div>

      <div className="container my-3">
        <h2>All</h2>
        <div className="row">
          {allitem.map((element1) => {
            console.log("element1")
            console.log(element1)
            return <div className="col-md-3" key={element1.url}>
              <Card image={element1.images[1]} name={element1.name} id={element1._id} price={element1.price} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage