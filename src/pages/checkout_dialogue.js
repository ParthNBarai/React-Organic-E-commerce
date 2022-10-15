import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom'

function CheckOutModal(props) {


    return (
        <>


            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout Screen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="Address">Address</label>
                            <textarea className="form-control" id="Address" rows="3"></textarea>
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label htmlFor="paynment">Paynment Mode</label>

                        </div>

                        <div className="form-check" id='paynment'>
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                COD (Cash on delivery)
                            </label>
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    {/* <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button> */}
                    <div>
                        <Link to='/order'>
                            <Button variant="success" onClick={props.checkout} className='align-self-center'>
                                Checkout
                            </Button>
                        </Link>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CheckOutModal;