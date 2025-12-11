import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddImage from "./AddImage";

const ModaleImmagine = function (props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Carica unimmagine
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddImage />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )

}

export default ModaleImmagine