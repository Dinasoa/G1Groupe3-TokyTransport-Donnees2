import React from 'react'
import { Form } from 'react-bootstrap';

class BootstrapDatePickerComponent extends React.Component{

    render(){

        return(
            <div>
                        <Form.Group controlId="dob">
                            {/* <Form.Label>Date</Form.Label> */}
                        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
            </div>
        )
    }
    
}

export default BootstrapDatePickerComponent;