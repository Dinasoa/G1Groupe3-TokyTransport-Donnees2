import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button , Form} from 'react-bootstrap';
import Select from 'react-select';
import BootstrapDatePickerComponent from './BootstrapDatePickerComponent';
import logo from './image/logo-bg.png' ;
import logo2 from './image/logo.png' ;
export default function Reserver() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const actions = [
    { label: "Antananarivo", value: 1 },
    { label: "Antsirabe", value: 2 },
    { label: "Fianarantsoa", value: 3 } ,
    { label: "Morondava", value: 4 } ,
    { label: "Tamatave", value: 5 } ,
    { label: "Mahajanga", value: 6 } ,
    { label: "Diego", value: 7 }
  ];
  
  return (
    <>
    <div id="bookTrip">
    <Button className="nextButton" onClick={handleShow}>
        Book a trip
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" id="bookTrip">
        <Modal.Header closeButton className="ModalHeader">
          <Modal.Title className="reservationModalTitle">
          <p> Book a trip </p>
         <img src={logo2}></img>
          </Modal.Title>
         
        </Modal.Header>
        <Modal.Body ClassName="reservationModalBody"> 
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />

    <Form.Label>LastName</Form.Label>
    <Form.Control type="text" placeholder="Enter your lastName" />
  </Form.Group>

  <Form.Group className="mb-3">
    <div>
    <label>Departure</label>
       <Select options={ actions } />
       </div>
      
      <div>
      <label>Arrival</label>
        <Select options={actions} />
      </div>

    
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
  <div>
       <label className='first'>Departure Date</label>
        <BootstrapDatePickerComponent/>
       </div>
  </Form.Group>
</Form>

        </Modal.Body>
        <Modal.Footer className="ModalFooter">
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Envoyer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
      
    </>
  );
}