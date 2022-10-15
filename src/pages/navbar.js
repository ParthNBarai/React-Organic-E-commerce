import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/person-circle.svg'
import cart from '../assets/images/cart3.svg'
import { Link } from 'react-router-dom'
import '../components/navbar.css';

function NavScrollExample() {
    return (
        <Navbar className='color' expand="lg" >
            <Container fluid>
                <Navbar.Brand className = 'mx-2' href="#">Organic</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        
                        <Nav.Link className = 'mx-3' href='#action1'>
                        <Link to='/home'>
                            <img
                                src={logo}
                                width="40"
                                height="25"
                                className="d-inline-block align-top"
                                alt="Brand logo"
                            />
                            </Link>
                        </Nav.Link>
                        
                        <Nav.Link href="#action2"> 
                        <Link to='/cart'>
                        <img
                            src={cart}
                            width="40"
                            height="25"
                            className="d-inline-block align-top"
                            alt="Brand logo"
                        />
                        </Link>
                        </Nav.Link>
                        

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;