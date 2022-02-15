import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

export class AddAptModal extends Component {
    constructor(props) {
        super(props);
        this.state = { apts: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'GetApartments')
            .then(response => response.json())
            .then(data => {
                this.setState({ apts: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'ApartmentInfo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                apartmentBlock: event.target.apartmentBlock.value,
                status: event.target.status.value,
                type: event.target.type.value,
                floor: event.target.floor.value,
                apartmentNumber: event.target.apartmentNumber.value,
                userId: event.target.userId.value
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert('EKLENDİ');
            },
                (error) => {
                    alert('HATA');
                })

    }

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
                            Ekle
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="apartmentBlock">
                                        <Form.Label>Blok</Form.Label>
                                        <Form.Control type="text" name="apartmentBlock" required
                                            defaultValue={this.props.ablock}
                                            placeholder="Blok Numarası" />
                                    </Form.Group>

                                    <Form.Group controlId="status">
                                        <Form.Label>Dolu(1)/Boş(0)</Form.Label>
                                        <Form.Control type="text" name="status" required
                                            defaultValue={this.props.astatus}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="type">
                                        <Form.Label>Daire Tipi</Form.Label>
                                        <Form.Control type="text" name="type" required
                                            defaultValue={this.props.atype}
                                            placeholder="2+1/3+1" />
                                    </Form.Group>


                                    <Form.Group controlId="floor">
                                        <Form.Label>Bulunduğu Kat</Form.Label>
                                        <Form.Control type="text" name="floor" required
                                            defaultValue={this.props.afloor}
                                            placeholder="Bulunduğu Kat" />
                                    </Form.Group>

                                    <Form.Group controlId="apartmentNumber">
                                        <Form.Label>Daire Numarası</Form.Label>
                                        <Form.Control type="text" name="apartmentNumber" required
                                            defaultValue={this.props.anum}
                                            placeholder="Daire Numarası" />
                                    </Form.Group>

                                    <Form.Group controlId="userId">
                                        <Form.Label>Daire Sakini</Form.Label>
                                        <Form.Control type="text" name="userId" required
                                            defaultValue={this.props.auid}
                                            placeholder="Daire Sakini" />
                                    </Form.Group>



                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Ekle
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