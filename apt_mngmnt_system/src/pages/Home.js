import React, { Component } from "react";
import MainHeaderAdmin from '../component/MainHeaderAdmin';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { useState } from "react";
import './Home.css'


export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { ebill: 0, dbill: 0, wbill: 0, detail: [] }
    }


    refreshList() {
        fetch(process.env.REACT_APP_API + 'TotalDue')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ dbill: data });
            });

        fetch(process.env.REACT_APP_API + 'TotalWater')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ wbill: data });
            });

        fetch(process.env.REACT_APP_API + 'TotalElectricity')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ ebill: data });
            });
        fetch(process.env.REACT_APP_API + 'Detail')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({ detail: data });
            });


    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }


    render() {
        const { ebill, dbill, wbill, detail } = this.state;
        return (
            <>
                <MainHeaderAdmin />
                <br /> <br />

                <div class="container">
                    <div className="block"><p>Toplam Elektrik Borcu: {ebill}</p></div>
                    <div className="blockx"><p>Toplam Su Borcu: {wbill}</p></div>
                    <div className="block"><p>Toplam Aidat Borcu: {dbill}</p></div>
                </div>

                <br/> <br/><br/><br/>
            
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>AD</th>
                            <th>SOYAD</th>
                            <th>BLOK</th>
                            <th>DAİRE NUMARASI</th>
                            <th>TC KİMLİK</th>
                            <th>MAİL</th>
                            <th>TELEFON </th>
                            <th>ARAÇ PLAKASI</th>
                            <th>EV SAHİBİ/KİRACİ </th>
                            <th>DOLU/BOŞ</th>
                            <th>BULUNDUĞU KAT</th>
                            <th>DAİRE TİPİ</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {detail.map(u =>
                            <tr key={u.id}>
                                <td>{u.name}</td>
                                <td>{u.surname}</td>
                                <td>{u.apartmentBlock}</td>
                                <td>{u.apartmentNumber}</td>
                                <td>{u.identityNumber}</td>
                                <td>{u.mail}</td>
                                <td>{u.telephoneNumber}</td>
                                <td>{u.carPlate}</td>
                                <td>{u.role}</td>
                                <td>{u.status}</td>
                                <td>{u.floor}</td>
                                <td>{u.type}</td>
                               

                            </tr>)}
                    </tbody>
                </Table>
            </>
        )
    }
}