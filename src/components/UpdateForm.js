import React from  "react";
import { Modal, Button } from 'react-bootstrap/'


class UpdateForm extends  React.Component{
render(){
    return(

        <>
          <Modal show={this.props.showUpdateForm}>
                        <Modal.Header closeButton>
                            <Modal.Title>Update book</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <form onSubmit={this.props.updateForm}>
                                <input type='text' name='name1' placeholder='Enter book name' defaultValue={this.props.name}/> 
                                <input type='text' name='description1' placeholder='Enter book description' defaultValue={this.props.description}/>

                                <input type='text' name='status1'  placeholder='Enter book status' defaultValue={this.props.status}/>
                                <input type="submit" value="Update Book" />
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
        </>
    )
}
}

export default UpdateForm;