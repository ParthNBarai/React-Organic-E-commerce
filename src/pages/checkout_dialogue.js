import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CheckOutModal(props) {


    return (
        <>


            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Checkout Screen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="form-group">
                            <label for="Address">Address</label>
                            <textarea class="form-control" id="Address" rows="3"></textarea>
                        </div>
                         <br></br>
                        <div class="form-group">
                            <label for="paynment">Paynment Mode</label>
                            
                        </div>
                       
                        <div class="form-check" id='paynment'>
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                            <label class="form-check-label" for="flexRadioDefault2">
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
                        <Button variant="success" onClick={props.handleClose} className='align-self-center'>
                            Checkout
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CheckOutModal;