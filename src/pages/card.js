import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'


function BasicExample(props) {
    // console.log("Props here test")
    // console.log(props.id)
    return (

        <div className="m-3">
            <Card style={{ width: '18rem' }}>

                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        {props.name}
                    </Card.Text>
                    <Link to='/view' state={{ id: props.id }}>
                        <Button variant="primary">View Product</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BasicExample;