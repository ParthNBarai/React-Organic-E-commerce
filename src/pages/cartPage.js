import ItemCard from './itemcard'
import '../components/cart.css'
import Navbar from '../pages/navbar'
function CartPage() {
    return (
        <div>
            <Navbar></Navbar>
        <div class="container-fluid my-2">
            <h2>Shopping Cart</h2> <br />
            <div class="row align-items-start justify-content-evenly">
                <div class="col-6 align-self-center">
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                    <ItemCard></ItemCard>
                </div>
                <div class="col-3 price-box ">
                    <p> Price Details </p>
                    <hr></hr>
                    <div className="row align-items-start justify-content-evenly">
                        <div className='col-6 align-self-start '>
                            <p> Price</p>
                            <p> Total Discount</p>
                            <p> Delivery Charges</p>
                        </div>
                        <div className='col-3 align-self-end'>
                            <p> <b>₹ 2000</b></p>
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
                            <p> <b>₹ 2000</b></p>

                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-success align-self-center' >Checkout</button>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
}

export default CartPage;