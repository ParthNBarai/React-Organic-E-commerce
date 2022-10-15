import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import homelogo from "../assets/images/home-logo.png";
import Carousal from "./carousal";
import Button from "react-bootstrap/Button";
import "../components/product.css";
import add from "../assets/images/add.png";
import sub from "../assets/images/subtract.png";
import garden from "../assets/images/Garden.png";
import puppy from "../assets/images/Puppy.png";
import sun from "../assets/images/Sun.png";
import cod from "../assets/images/Cod.png";
import returns from "../assets/images/Returns.png";
import Navbar from "./navbar";
import { useLocation, Link } from "react-router-dom";
import CheckOutModal from "../pages/checkout_dialogue";

function Viewproduct(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [product, setProduct] = useState({});
    // console.log(product.location.state)
    const [item, setItem] = useState(1);
    const [isloading, setLoading] = useState(true);
    const location = useLocation();

    // console.log("Here")
    // console.log(location.state.id)
    const id = location.state.id;
    console.log(id);
    let getProduct = async () => {
        try {
            // console.log(localStorage.getItem('auth-token'))
            var response = await fetch(`/product/get/${location.state.id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("auth-token"),
                },
            });

            const data = await response.json();
            // console.log("Product")
            // console.log(data)
            setProduct(data);
            setLoading(false);
            // console.log(item)
        } catch (error) {
            console.log(error);
        }
    };
    let buyProduct = async () => {
        setLoading(true);

        try {
            // console.log(localStorage.getItem('auth-token'))
            var response = await fetch("/order/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("auth-token"),
                },
                body: JSON.stringify({
                    quantity: item,
                    product: location.state.id,
                }),
            });

            const data = await response.json();
            // console.log("Product")
            // console.log(data)
            setProduct(data);
            setLoading(false);
            // console.log(item)
        } catch (error) {
            console.log(error);
        }
    };

    let addToCart = async () => {
        try {
            // console.log(localStorage.getItem('auth-token'))
            // console.log("inside cart func")
            // console.log(location.state.id)
            var response = await fetch("/cart/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    token: localStorage.getItem("auth-token"),
                },
                body: JSON.stringify({
                    product: location.state.id,
                    quantity: item,
                }),
            });

            const data = await response.json();
            // console.log("data test")
            // console.log(data)
            // setItem(data)
            // console.log(item)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    if (isloading) {
        return (
            <div className="text-center spinner">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    const addItem = () => {
        if (item < product.quantity) {
            setItem((item) => parseInt(item) + 1);
        }
    };
    const subtractItem = () => {
        if (item > 1) {
            setItem((item) => parseInt(item) - 1);
        }
    };

    return (
        <>
            <CheckOutModal
                show={show}
                handleShow={handleShow}
                handleClose={handleClose}
                checkout={buyProduct}
            >
                {" "}
            </CheckOutModal>
            <Navbar />

            <Carousal id={location.state.id} />
            <div className="container my-3">
                <div className="row">
                    <div className="col-md-7 float-end">
                        <div className="my-3">
                            <h2>{product.name}</h2>
                        </div>
                        <div className="my-3">
                            <h5>₹ {product.price}</h5>
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
                            <div className="col-1">{item}</div>
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
                        <div className="align-button my-3 w-100">
                            <div className="col-md-4 ">
                                <Button variant="success" className="w-100 p-2 " onClick={handleShow}>
                                    Buy
                                </Button>
                            </div>
                            <div className="col-md-1">
                                
                            </div>
                            <div className="col-md-4 mx-2">
                                <Link to="/view">
                                    <Button
                                        className="btn btn-success w-100 p-2"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            addToCart();
                                        }}
                                    >
                                        Add to cart
                                    </Button>
                                </Link>
                            </div>
                            <div className="col-md-3"></div>
                        </div>
                        <div className="my-5">
                            <div className="my-3">
                                <h4>Description :</h4>
                            </div>
                            {/* {product.services[0]}
                            <br />
                            {product.services[1]} */}
                            {product.description}
                        </div>
                        
                    </div>
                    <div className="col-md-4 mx-3 ">
                        <div className="my-3">
                            <h4>Services Available:</h4>
                            <div
                                className="card"
                                style={{ width: "24rem" }}>
                                <ul className="list-group list-group-flush ">
                                    <li className="list-group-item ">
                                        <div className="row align-items-center">
                                            <img src={returns} className="col-2" alt="garden" />
                                            <div className="col "> Free replacements if damaged on delivery</div>
                                        </div>
                                    </li>
                                    <li className="list-group-item ">
                                        <div className="row align-items-center">
                                            <img className="col-2" src={cod} alt="sun" />
                                            <div className="col">Cash on Delivery</div>
                                        </div>
                                    </li>
                                    {/*  Water Every 2 Days
                    Needs Bright Indirect Sunlight
                    Keep Away From Pets
                     */}
                                </ul>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="my-3">
                                <h4>Things to Keep in mind :</h4>
                                <div
                                    className="card"
                                    style={{ width: "24rem", "border-color": "green", "border-width": "1px" }}>
                                    <ul className="list-group list-group-flush ">
                                        <li className="list-group-item " style={{ "border-color": "green", "border-width": "1px" }}>
                                            <div className="row align-items-center">
                                                <img src={garden} className="col-2" alt="garden" />
                                                <div className="col "> Water Every 2 Days</div>
                                            </div>
                                        </li>
                                        <li className="list-group-item " style={{ "border-color": "green", "border-width": "1px" }}>
                                            <div className="row align-items-center">
                                                <img className="col-2" src={sun} alt="sun" />
                                                <div className="col">Needs Bright Indirect Sunlight</div>
                                            </div>
                                        </li>
                                        <li className="list-group-item " style={{ "border-color": "green", "border-width": "1px" }}>
                                            <div className="row align-items-center">
                                                <img className="col-2" src={puppy} alt="puppy" />
                                                <div className="col">Keep Away From Pets</div>
                                            </div>
                                        </li>
                                        {/*  Water Every 2 Days
                    Needs Bright Indirect Sunlight
                    Keep Away From Pets
                     */}
                                    </ul>
                                </div>
                            </div>
                            {/* {product.description} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Viewproduct;
