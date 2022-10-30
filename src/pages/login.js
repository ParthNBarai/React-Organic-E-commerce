import React, { useState } from 'react'
import '../components/login.css'
import homelogo from '../assets/images/home-logo.png'
import { loginApi } from '../services/auth';
import { Link } from 'react-router-dom';



export default function Login(props) {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")



    return (
        <>

            <div className="loginpage">
                <div className="loginimg">
                    <img src={homelogo} alt="loginimage" />
                </div>
                <div className="loginform">
                    <div className="loginform-container">
                        <form action="">
                            <div className="loginlogo"><img src={homelogo} alt="" srcset="" /></div>
                            <h3>Organic E-Commerce</h3>
                            <div className='logindetails'>
                                <input type="text" placeholder='User Name' name="email" onChange={(e) => setEmail(e.target.value)} />
                                <input type="password" placeholder='Password' name="password" onChange={(e) => setPass(e.target.value)} />
                                <button type="button" className='loginbutton' onClick={() => { loginApi(email, pass) }} >Login</button>
                                <div className="signupoption">
                                    <Link to='/signup'>
                                        <button className='loginbutton'>SignUp</button>
                                    </Link>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}