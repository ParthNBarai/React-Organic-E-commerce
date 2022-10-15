import React, { useState, useEffect } from 'react'
import logo from '../assets/images/placed.gif'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'

function OrderPlaced() {

    return (
        <>
            
            
            
            <div class="d-flex align-items-center " style={{"min-height": "100vh"}}>
                <div class="box w-100 ">
                <img src={logo} className="rounded mx-auto d-block" />
                    <h3 className='display-5' align='center'>Your Order has been successfully placed!</h3>
                </div>
            </div>
        
        
    
            {setTimeout(function () {
                window.location.href = '/home';
            }, 5000)}


        </>

    )
}

export default OrderPlaced;