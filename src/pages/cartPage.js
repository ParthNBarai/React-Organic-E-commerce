import ItemCard from './itemcard'
import React,{useState, useEffect} from 'react'
import '../components/cart.css'
import Navbar from '../pages/navbar'
import CheckOutModal from '../pages/checkout_dialogue';


function CartPage() {

    const[isloading,setloading]= useState(true)
    const [items,setItems]=useState([])

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    let removeItem= (index)=> {
        console.log(index)
        var array= items;
        array.splice(index,1)
        
        setItems(array);
        
        console.log(array)
    }



    let getcart= async()=>{
        try {
            // console.log(localStorage.getItem('auth-token'))
            var response = await fetch('/cart/get', {
              method: "GET",
              headers: { "Content-Type": "application/json", "token": localStorage.getItem('auth-token') },
      
            })
      
            const data = await response.json()
            console.log(data)
            setItems(data['message'])
            setloading(false)
            // console.log(item)
      
          } catch (error) {
            console.log(error)
          }
    }

    useEffect(() => {

        getcart()
    }, []);

    if(isloading){
        return (<div className="text-center spinner">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>)
    }
    var price= 0;
    for(var i=0;i<items.length;i++){
        price+=items[i].product.price*items[i].quantity;
    }
    return (
        
        <div>
            <CheckOutModal show= {show} handleShow={handleShow} handleClose={handleClose}> </CheckOutModal>
            <Navbar></Navbar>
        <div className="container-fluid my-2">
            <h2>Shopping Cart</h2> <br />
            <div className="row align-items-start justify-content-evenly ">
                <div className="col-12 col-md-8  align-self-center">
                {items.map((element,index) => {
                            
                            console.log(index)
                            // console.log(element)
                            return <ItemCard  item={element} removeItem= {removeItem} index= {index}/>
                        }
                )}
                </div>
                <div className="col-12  col-md-3 price-box ">
                    <p> Price Details </p>
                    <hr></hr>
                    <div className="row align-items-start justify-content-evenly">
                        <div className='col-6 align-self-start '>
                            <p> Price</p>
                            <p> Total Discount</p>
                            <p> Delivery Charges</p>
                        </div>
                        <div className='col-3 align-self-end'>
                            <p> <b>₹ {price}</b></p>
                            <p> <b>₹ 0</b></p>
                            <p className='text-success'><b> FREE</b></p>
                        </div>
                    </div>
                    <hr className='dotted-line'></hr>
                    <div className="row align-items-start justify-content-evenly">
                        <div className='col-6 align-self-start '>
                            <p><b>Total Price</b></p>

                        </div>
                        <div className='col-3 align-self-end'>
                            <p> <b>₹ {price}</b></p>

                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-success align-self-center' onClick={handleShow}>Checkout</button>
                    </div> 
                </div>

            </div>
        </div>
        </div>
    );
}

export default CartPage;