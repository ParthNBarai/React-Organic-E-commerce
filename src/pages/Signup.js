import React, { useState } from 'react'
import '../components/login.css'
import homelogo from '../assets/images/home-logo.png'
import { loginApi } from '../services/auth';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")
    let signup = async (email, pass, name) => {
        try {
            var response = await fetch('/user/register', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "userName": name,
                    "password": pass,
                    "userEmail": email
                })
            })

            if (response.status === 200) {
                const json = await response.json();
                console.log(json)

                localStorage.setItem('auth-token', json.token);
                window.location.href = '/home';
            }
            else {
                console.log(response.json)
            }

        } catch (error) {
            console.log(error)
        }
    }
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
                                <input type="text" placeholder='Password' name="password" onChange={(e) => setPass(e.target.value)} />
                                <input type="text" placeholder='Name' name="name" onChange={(e) => setName(e.target.value)} />
                                <div className="signupoption">
                                    <Link to='/signup'>
                                        <button className='loginbutton' onClick={() => { signup(email, pass, name) }}>SignUp</button>
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
