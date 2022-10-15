import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import '../components/card.css'

function BasicExample(props) {
    // console.log("Props here test")
    // console.log(props.id)
    return (

        <div className="">
            <div className='card w-20 h-30 shadow p-2 mb-5 mx-0 bg-white rounded' style={{ width: '15rem',maxHeight:'30px',minHeight:'360px' }}>

            <img className="card-img-top " width="100%" height="200px" src={props.image} alt="..." />
            <div className='row  my-2 ' >
            <div className='col-12 col-md-12 align-self-center '>
                <h4 className='card-title'>₹ {props.price}</h4>
                </div>
                <div className='col-12 col-md-12 align-self-start'>
                <p className='card-title'> {props.name}</p>
                </div>
                
            </div>
            <Link to='/view' state={{ id: props.id }}>
                <Button  className='btn btn-success w-100 border rounded-bottom cardbutton'>View Product</Button>
            </Link>
            
            </div>
        </div>
    );
}

export default BasicExample;