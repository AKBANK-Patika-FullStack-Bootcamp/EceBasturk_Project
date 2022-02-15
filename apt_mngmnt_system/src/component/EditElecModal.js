import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

export class EditElecModal extends Component {
    constructor(props) {
        super(props);
        this.state = { bills: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'AptElectricBills')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'UpdateElec', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                month: event.target.month.value,
                year: event.target.year.value,
                amount: event.target.amıunt.value,
                isPaid: event.target.isPaid.value,
                apartmentId: event.target.apartmentId.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
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
                            Güncelle
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={8}>
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="month">
                                        <Form.Label>Ay</Form.Label>
                                        <Form.Control type="text" name="month" required
                                            defaultValue={this.props.bmonth}
                                            placeholder="Ay" />
                                    </Form.Group>

                                    <Form.Group controlId="year">
                                        <Form.Label>Yıl</Form.Label>
                                        <Form.Control type="text" name="year" required
                                            defaultValue={this.props.byear}
                                            placeholder="xxxx" />
                                    </Form.Group>

                                    <Form.Group controlId="amount">
                                        <Form.Label>Ödenecek Tutar</Form.Label>
                                        <Form.Control type="text" name="amount" required
                                            defaultValue={this.props.bamount}
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="isPaid">
                                        <Form.Label>Ödendi Mi?</Form.Label>
                                        <Form.Control type="text" name="isPaid" required
                                            defaultValue={this.props.bpaid}
                                            placeholder="Ödendi(1)/Ödenmedi(0)" />
                                    </Form.Group>

                                    <Form.Group controlId="apartmentId">
                                        <Form.Label>Daire Sakini Numarası</Form.Label>
                                        <Form.Control type="text" name="apartmentId" required
                                            defaultValue={this.props.baid}
                                        />
                                    </Form.Group>



                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Güncelle
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