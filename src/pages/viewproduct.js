import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import homelogo from '../assets/images/home-logo.png'
import Carousal from './carousal'
import Button from 'react-bootstrap/Button';
import '../components/product.css'
import add from '../assets/images/add.png'
import sub from '../assets/images/subtract.png'
import Navbar from '../pages/navbar'
import { useLocation, Link } from 'react-router-dom';

function Viewproduct(props) {
    const [product, setProduct] = useState({})
    // console.log(product.location.state)
    const [item, setItem] = useState(1)
    const location = useLocation();

    // console.log("Here")
    // console.log(location.state.id)
    let getProduct = async () => {


        try {
            // console.log(localStorage.getItem('auth-token'))
            var response = await fetch(`/product/get/${location.state.id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json", "token": localStorage.getItem('auth-token') },

            })

            const data = await response.json()
            // console.log("Product")
            // console.log(data)
            setProduct(data)
            // console.log(item)

        } catch (error) {
            console.log(error)
        }

    }
    let buyProduct = async () => {


        try {
            // console.log(localStorage.getItem('auth-token'))
            var response = await fetch('/order/add', {
                method: "POST",
                headers: { "Content-Type": "application/json", "token": localStorage.getItem('auth-token') },
                body: JSON.stringify({
                    "quantity": item,
                    "product": location.state.id,
                })

            })

            const data = await response.json()
            // console.log("Product")
            // console.log(data)
            setProduct(data)
            // console.log(item)

        } catch (error) {
            console.log(error)
        }

    }

    let addToCart = async () => {


        try {
            // console.log(localStorage.getItem('auth-token'))
            console.log("inside cart func")
            console.log(location.state.id)
            var response = await fetch('/cart/add', {
                method: "POST",
                headers: { "Content-Type": "application/json", "token": localStorage.getItem('auth-token') },
                body: JSON.stringify({
                    "product": location.state.id,
                    "quantity": item
                })
            })

            const data = await response.json()
            console.log("data test")
            console.log(data)
            // setItem(data)
            // console.log(item)

        } catch (error) {
            console.log(error)
        }

    }



    useEffect(() => {

        getProduct()
    }, []);

    const addItem = () => {
        if (item < product.quantity) {

            setItem((item) => parseInt(item) + 1)
        }
    }
    const subtractItem = () => {
        if (item > 1) {
            setItem((item) => parseInt(item) - 1)
        }
    }

    return (
        <>
            <Navbar />

            <Carousal id={location.state.id} />
            <div className="container my-3">
                <div className="row">


                    <div className="col-md-7 float-end">
                        <div className="my-3" >
                            <h2>{product.name}</h2>
                        </div>
                        <div className="my-3">
                            ₹ {product.price}
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <img
                                    src={add}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="Brand logo"
                                    onClick={() => addItem()}
                                />
                            </div>
                            <div className="col-1">
                                {item}
                            </div>
                            <div className="col-1">
                                <img
                                    src={sub}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="Brand logo"
                                    onClick={() => subtractItem()}
                                />
                            </div>
                        </div>
                        <div className='align-button my-3'>
                            <div className="col md-3">
                                <Link to='/home' >

                                    <Button variant="success" onClick={() => { buyProduct() }}>Buy</Button>
                                </Link>
                            </div>
                            <div className="col md-3">
                                <Link to='/view'>
                                    <Button className="btn btn-success" onClick={() => { addToCart() }}>Add to cart</Button>
                                </Link>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="my-3">
                                <h3>Services available:</h3>
                            </div>
                            {/* {product.services[0]}
                            <br />
                            {product.services[1]} */}
                            {product.description}
                        </div>
                        <div className="my-3">
                            <div className="my-3">
                                <h3>Warnings:</h3>
                            </div>
                            {product.description}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="my-3">
                            {product.description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewproduct