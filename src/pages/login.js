import React ,{useState} from 'react'
import '../components/login.css'
import loginimg from '../assets/images/loginimg.png'
import sfitlogo from '../assets/images/logo.png'
import {loginApi} from '../services/auth';




export default function login(props) {

   
    

    return (
        <>

            <div className="loginpage">
                <div className="loginimg">
                    <img src={loginimg} alt="loginimage" />
                </div>
                <div className="loginform">
                    <div className="loginform-container">
                        <form action="">
                            <div className="loginlogo"><img src={sfitlogo} alt="" srcset="" /></div>
                            <h3>Organic E-Commerce</h3>
                            <div className='logindetails'>
                                <input type="text" placeholder='User Name' name ="email" />
                                <input type="text" placeholder='Password' name="password"/>
                                <button type="button" className='loginbutton' onClick={loginApi()} >Login</button>
                                <div className="signupoption">
                                   
                                    <button className='loginbutton'>SignUp</button>
                                </div>
                                
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}