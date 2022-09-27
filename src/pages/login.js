import React from 'react'
import '../components/login.css'
import loginimg from '../assets/images/loginimg.png'
import sfitlogo from '../assets/images/logo.png'
import googlelogo from '../assets/images/googlelogo.png'

export default function login() {
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
                            <h2>SFIT Stock Management System</h2>
                            <div className='logindetails'>
                                <input type="text" placeholder='User Name' />
                                <input type="text" placeholder='Password' />
                                <button type="submit" className='loginbutton'>Login</button>
                                <div className="signupoption">
                                    <p>New User ?</p>
                                    <button className='loginbutton'>SignUp</button>
                                </div>
                                <div className="googlelogin">
                                    <button><img src={googlelogo} /> <h4>Sign Up with Google</h4></button>
                                    <p>SFIT email only</p>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}