import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap';

export class AddUserModal extends Component {
    constructor(props) {
        super(props);
        this.state = { deps: [] };
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'GetUsers')
            .then(response => response.json())
            .then(data => {
                this.setState({ deps: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'UserInfo', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
                surname: event.target.surname.value,
                identityNumber: event.target.identityNumber.value,
                mail: event.target.surname.value,
                telephoneNumber: event.target.telephoneNumber.value,
                carPlate: event.target.carPlate.value,
                role: event.target.role.value
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

                                    <Form.Group controlId="name">
                                        <Form.Label>Ad</Form.Label>
                                        <Form.Control type="text" name="name" required
                                            defaultValue={this.props.uname}
                                            placeholder="Adı" />
                                    </Form.Group>

                                    <Form.Group controlId="surname">
                                        <Form.Label>Soyad</Form.Label>
                                        <Form.Control type="text" name="surname" required
                                            defaultValue={this.props.usur}
                                            placeholder="Soyadı" />
                                    </Form.Group>

                                    <Form.Group controlId="identityNumber">
                                        <Form.Label>TC Kimlik</Form.Label>
                                        <Form.Control type="text" name="identityNumber" required
                                            defaultValue={this.props.utc}
                                            placeholder="TC NO" />
                                    </Form.Group>

                                    <Form.Group controlId="mail">
                                        <Form.Label>Mail</Form.Label>
                                        <Form.Control type="text" name="mail" required
                                            defaultValue={this.props.umail}
                                            placeholder="Mail" />
                                    </Form.Group>

                                    <Form.Group controlId="telephoneNumber">
                                        <Form.Label>Telefon Numarası</Form.Label>
                                        <Form.Control type="text" name="telephoneNumber" required
                                            defaultValue={this.props.utel}
                                            placeholder="0-XXX-XXX-XX-XX" />
                                    </Form.Group>

                                    <Form.Group controlId="carPlate">
                                        <Form.Label>Araç Plakası</Form.Label>
                                        <Form.Control type="text" name="carPlate" required
                                            defaultValue={this.props.ucar}
                                            placeholder="00-XXX-00" />
                                    </Form.Group>

                                    <Form.Group controlId="role">
                                        <Form.Label>Role</Form.Label>
                                        <Form.Control as="select">                                          
                                                <option>Admin</option>)
                                                <option>Sahip</option>
                                                <option>Kiraci</option>
                                        </Form.Control>
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