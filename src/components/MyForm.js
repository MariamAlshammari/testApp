import React from 'react';
import { Modal, Button } from 'react-bootstrap/'

class MyForm extends React.Component {
    render() {
        {
            
            return (
                <>
                    <Modal show={this.props.showModel}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add book</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <form onSubmit={this.props.addBooks}>
                                <input type='text' name='name' placeholder='Enter book name' /> 
                                <input type='text' name='description' placeholder='Enter book description'/>

                                <input type='text' name='status'  placeholder='Enter book status'/>
                                <input type="submit" value="Add Book" />
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            )
        }
        return (
            <>

            </>
        )
    }
}

export default MyForm;