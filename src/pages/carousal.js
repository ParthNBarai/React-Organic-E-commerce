import Carousel from 'react-bootstrap/Carousel';
import homelogo from '../assets/images/home-logo.png'
import '../components/carousal.css'
import React, { useState, useEffect } from 'react'

function UncontrolledExample(props) {
    const [product, setProduct] = useState([homelogo])
  
    let getProduct = async () => {


        try {
            // console.log(localStorage.getItem('auth-token'))
            var response = await fetch(`/product/get/${props.id}`, {
                method: "GET",
                headers: { "Content-Type": "application/json", "token": localStorage.getItem('auth-token') },

            })

            const data = await response.json()
            console.log("Product")
            console.log(data)
            setProduct(data.images)
            console.log("item")
            console.log(product)

        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getProduct()
        // console.log(item)
    }, [])
    return (
        <>

            <div className="middle">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    
                
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={homelogo} className="d-block w-100" alt="..." />
                        </div>
                        
                        {product.map((element, index) => {
                            console.log(index)
                            console.log(element)
                            return <div className="carousel-item">
                                <img src={element} className="d-block w-100" alt="..." />
                            </div>
                        })}

                    </div>
                </div>

            </div>
        </>
        // <div className="container">
        //     <div className="carousal">
        //         <Carousel>
        //             {/* <Carousel.Item>
        //                 <img
        //                     className="d-block"
        //                     src={homelogo}
        //                     alt="First slide"
        //                 />
        //             </Carousel.Item>
        //             <Carousel.Item>
        //                 <img
        //                     className="d-block"
        //                     src={homelogo}
        //                     alt="Second slide"
        //                 />

        //             </Carousel.Item> */}

        //             {product.map((element, index) => {

        //                     <Carousel.Item>
        //                         <img
        //                             src={element}
        //                             alt="Third slide"
        //                         />


        //                     </Carousel.Item>

        //             })}

        //         </Carousel>
        //         {product.map((element, index) => {
        //             console.log(index)
        //             console.log(element)
        //             return <div key={index}>

        //                 <img

        //                     src={element}
        //                     alt="Third slide"
        //                 />



        //             </div>
        //         })}
        //     </div >
        // </div >
    );
}

export default UncontrolledExample;