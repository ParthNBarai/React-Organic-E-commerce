import Carousel from 'react-bootstrap/Carousel';
import homelogo from '../assets/images/home-logo.png'
import '../components/carousal.css'

function UncontrolledExample() {
    return (
        <div className="middle">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homelogo}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homelogo}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={homelogo}
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default UncontrolledExample;