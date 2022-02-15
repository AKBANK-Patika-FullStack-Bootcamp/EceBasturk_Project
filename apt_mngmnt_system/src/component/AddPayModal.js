import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

export class AddPayModal extends Component {

    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            ÖDE
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>  
                                    <Form.Group controlId="number">
                                        <Form.Label>Kart Numarası</Form.Label>
                                        <Form.Control type="text" name="number" required
                                            
                                            placeholder="xxxx-xxxx-xxxx-xxxx" />
                                    </Form.Group>

                                    <Form.Group controlId="name">
                                        <Form.Label>Ad Soyad</Form.Label>
                                        <Form.Control type="text" name="name" required
                                            placeholder='Adınız'
                                            />
                                    </Form.Group>

                                    <Form.Group controlId="valid">
                                        <Form.Label>Ay/Yıl</Form.Label>
                                        <Form.Control type="text" name="valid" required
                                          
                                            placeholder="Ay/Yıl" />
                                    </Form.Group>


                                    <Form.Group controlId="CVV">
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control type="text" name="CVV" required
                                            placeholder="xxx" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            ÖDE
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>

                
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Kapat</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}