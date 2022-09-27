import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/images/loginimg.png'
import Carousal from './carousal'
import Button from 'react-bootstrap/Button';
import '../components/product.css'


function viewproduct(props) {
    return (
        <>
            <div className="container my-3">
                <Carousal />
                <div className="row">


                    <div className="col-md-7 float-end">
                        <div className="my-3" >
                            <h2>{props.name}</h2>
                        </div>
                        <div className="my-3">
                            {props.price}
                        </div>
                        <div className="my-3">
                            {props.quantity}
                        </div>
                        <div className='align-button'>
                            <div className="col md-3">
                                <Button variant="success">Buy</Button>
                            </div>
                            <div className="col md-3">
                                <Button className="btn btn-success">Add to cart</Button>
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="my-3">
                                <h3>Services available:</h3>
                            </div>
                            {props.services[0]}
                            <br />
                            {props.services[1]}
                        </div>
                        <div className="my-3">
                            <div className="my-3">
                                <h3>Warnings:</h3>
                            </div>
                            {props.warnings}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="my-3">
                            {props.desc}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default viewproduct