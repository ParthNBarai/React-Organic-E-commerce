import React, { useState, useEffect } from 'react'
import logo from '../assets/images/placed.gif'
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'

function OrderPlaced() {

    return (
        <>
            <img src={logo} className="rounded mx-auto d-block" />
            <p align = 'center'>
                Your Order has been successfully placed!
            </p>

            {setTimeout(function () {
                window.location.href = '/home';
            }, 5000)}


        </>

    )
}

export default OrderPlaced;