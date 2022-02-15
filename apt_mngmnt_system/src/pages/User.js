import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import MainHeaderAdmin from '../component/MainHeaderAdmin';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddUserModal } from '../component/AddUserModal';
import { EditUserModal } from '../component/EditUserModal';

export class User extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [], detail:[],  addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'GetUsers')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data });
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

    deleteUser(userid) {
        if (window.confirm('Silme işlemi geri döndürülemez. Emin misiniz?')) {
            fetch(process.env.REACT_APP_API + 'UserDelete/' + userid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }

            })
        }


    }
    render() {
        const { users, detail, uid, uname, usur, utc, umail, utel, ucar, urol } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <MainHeaderAdmin />
                <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        DAİRE SAKİNİ EKLE</Button>

                    <AddUserModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>AD</th>
                            <th>SOYAD</th>
                            <th>BULUNDUĞU BLOK</th>
                            <th>DAİRE NUMARASI</th>
                            <th>ROL </th>
                            <th>TC KİMLİK</th>
                            <th>MAİL</th>
                            <th>TELEFON </th>
                            <th>ARAÇ PLAKASI</th>

                        </tr>
                    </thead>
                    <tbody>
                        {detail.map(u =>
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.surname}</td>
                                <td>{u.apartmentBlock}</td>
                                <td>{u.apartmentNumber}</td>
                                <td>{u.role}</td>
                                <td>{u.identityNumber}</td>
                                <td>{u.mail}</td>
                                <td>{u.telephoneNumber}</td>
                                <td>{u.carPlate}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                uid: u.id
                                                , uname: u.name, usur: u.surname, utc: u.identityNumber,
                                                umail: u.mail, utel: u.telephoneNumber, ucar: u.carPlate, urol: u.role
                                            })}>
                                            Güncelle
                                        </Button>

                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteUser(u.id)}>
                                            Sil
                                        </Button>

                                        <EditUserModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            uid={uid}
                                            uname={uname}
                                            usur={usur}
                                            utc={utc}
                                            umail={umail}
                                            utel={utel}
                                            ucar={ucar}
                                            rol={urol}
                                        />
                                    </ButtonToolbar>

                                </td>

                            </tr>)}
                    </tbody>

                </Table>


            </div>
        )
    }
}