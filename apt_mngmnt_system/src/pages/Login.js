import React, { Component } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import loginIcon from '../images/login.svg';
import './Login.css';
import Tema from '../images/tema.svg'
import MainHeaderAdmin from '../component/MainHeaderAdmin';
export class Login extends Component {
    render() {
    return (
        <>
            <Container className= "mt-5">
                <Row>
                    <Col lg={4} md={6} sm={15} className="text-center mt-5 p-3">
                        <img className="icon-img" src={loginIcon} alt="icon" />
                        <Form>
                           
                                 <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary btn-block" type="submit">
                                Giriş Yap
                            </Button>

                            <div className='text-left mt-5'>
                            <a href="#"><small className='reset'>Şifre Resetle</small></a>  ||   
                            <a href="#"><small className="reset ml-2">Hızlı Düzenle</small></a>
                            </div>
                        </Form>

                    </Col>
                    <Col lg={8} md={15} sm={15}>
                        <img className="w-200"  src={Tema} alt=""/>

                    </Col>
                </Row>
            </Container>
        </>
    )
    }
};
