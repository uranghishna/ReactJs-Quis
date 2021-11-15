import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap';

const ModalPage = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="container mt-4">
            <Button variant="primary" onClick={handleShow}>
            Cobain klik ini yuk !!
            </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal Nih !!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>NAH KAN MUNCUL INI HAHAHAH</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Balik
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Lanjut
            </Button>
            </Modal.Footer>
        </Modal>
        </div>
    )
}

export default ModalPage
