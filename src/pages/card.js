import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


function BasicExample(props) {
    return (

        <div className="m-3">
            <Card style={{ width: '18rem' }}>

                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {props.name}
                    </Card.Text>
                    <Link to={"/view"}>
                        <Button variant="primary">View Product</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BasicExample;