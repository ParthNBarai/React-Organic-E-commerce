import React, { useContext, useEffect, useRef, useState } from 'react'
import Card from './card'
import logo from '../assets/images/person-circle.svg'
import Carousal from './carousal'
import Navbar from '../pages/navbar'


function HomePage() {
  const [item, setItem] = useState([])
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
      // console.log(item)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    getProducts()
    // console.log(item)
  }, [])
  // const datas= getProducts();
  // console.log("here")
  // console.log(datas)


  return (
    <>
      <Navbar />
      <Carousal />
      <div className="container my-3">
        <h2>More Popular</h2>
        <div className="row">

          {item.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <Card image={logo} name={element.name} id={element._id} />
            </div>
          })}
        </div>
      </div>

      <div className="container my-3">
        <h2>All</h2>
        <div className="row">
          {item.map((element1) => {
            return <div className="col-md-3" key={element1.url}>
              <Card image={logo} name={element1.name} />
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default HomePage