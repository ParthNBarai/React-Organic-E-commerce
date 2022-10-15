import Carousel from 'react-bootstrap/Carousel';
import homelogo from '../assets/images/home-logo.png'
import '../components/carousal.css'

function UncontrolledExample() {
    return (
        <div className="middle w-100 h-15" style={{'background-color': 'rgba(201,199,199,0.4)'}}>
            <Carousel>
                <Carousel.Item>
                    <img
                    height='15%'
                        className="d-block w-100"
                        src={homelogo}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                   height='15%'
                        className="d-block w-100"
                        src={homelogo}
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                     height='15%'
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