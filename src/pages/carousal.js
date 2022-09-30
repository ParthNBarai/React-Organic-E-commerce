import Carousel from 'react-bootstrap/Carousel';
import homelogo from '../assets/images/home-logo.png'
import '../components/carousal.css'

function UncontrolledExample() {
    return (
        <div className="container">
            <div className="carousal">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={homelogo}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={homelogo}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={homelogo}
                            alt="Third slide"
                        />

                
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default UncontrolledExample;