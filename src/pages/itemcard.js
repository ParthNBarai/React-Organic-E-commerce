import homelogo from '../assets/images/home-logo.png'
import add from '../assets/images/add.png'
import sub from '../assets/images/subtract.png'
import '../components/itemcard.css'
function ItemCard(props) {
    console.log(props.item.product.images[0])
    var quantity= props.item.quantity;
    return (

        <div className="container item-border" >

            <div className="row align-items-start mx-3">
                <div className="col-12 col-md-3 h-100 align-self-center">
                    <img src={props.item.product.images[0]} width="100%" alt="Item" height="100%" />
                </div>
                <div className="col-12 col-md-9 my-2">
                    <h6> {props.item.product.name}</h6>
                    <h6> <b>₹ {props.item.product.price}</b></h6>
                    <div className="row align-items-start">
                        <div className="row">
                            <div className="col-1">
                                <img
                                    src={add}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="Brand logo"

                                />
                            </div>
                            <div className="col-1 ">
                               <p> {quantity}</p> 
                            </div>
                            <div className="col-1">
                                <img
                                    src={sub}
                                    width="25"
                                    height="25"
                                    className="d-inline-block align-top"
                                    alt="Brand logo"

                                />
                            </div>
                            <div className="row align-items-start"> 
                            <div className='col-12 col-md-3 my-2'>
                            <button className= "btn btn-danger" >Remove</button>
                            </div>
                            <div className='col-12 col-md-8 my-2'>
                            <button className='btn btn-info text-white' >View product</button>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col align-right my-auto">
                    
                </div>

            </div>
           
        </div>

    );
}

export default ItemCard;