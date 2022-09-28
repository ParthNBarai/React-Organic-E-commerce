import React ,{useState} from 'react'
import '../components/login.css'
import loginimg from '../assets/images/loginimg.png'
import sfitlogo from '../assets/images/logo.png'
import {loginApi} from '../services/auth';




export default function Login(props) {

   const [email,setEmail]= useState("")
   const [pass,setPass]= useState("")
    

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
                                <input type="text" placeholder='User Name' name ="email" onChange= {(e) => setEmail(e.target.value)}/>
                                <input type="text" placeholder='Password' name="password" onChange= {(e) => setPass(e.target.value)}/>
                                <button type="button" className='loginbutton' onClick={()=> {loginApi(email,pass)}} >Login</button>
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