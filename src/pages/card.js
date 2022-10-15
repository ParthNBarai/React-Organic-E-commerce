import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import '../components/card.css'

function BasicExample(props) {
    // console.log("Props here test")
    // console.log(props.id)
    return (

        <div className="">
            <div className='card-w20 shadow p-2 mb-5 mx-0 bg-white rounded ' style={{ width: '14rem' }}>

            <img className="card-img-top" src={props.image} alt="..." />
            <div className='row  my-2'>
                <div className='col-6 align-self-start'>
                <p className='card-title'> {props.name}</p>
                </div>
                <div className='col-6 align-self-end'>
                <p className='card-title'>₹ {props.price}</p>
                </div>
            </div>
            <Link to='/view' state={{ id: props.id }}>
                        <Button variant="primary">View Product</Button>
            </Link>
            
            </div>
        </div>
    );
}

export default BasicExample;