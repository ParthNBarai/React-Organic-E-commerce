import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/images/loginimg.png'
import '../components/carousal.css'

function UncontrolledExample() {
    return (
        <div className="container">
            <div className="carousal">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={logo}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={logo}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={logo}
                            alt="Third slide"
                        />

                
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default UncontrolledExample;