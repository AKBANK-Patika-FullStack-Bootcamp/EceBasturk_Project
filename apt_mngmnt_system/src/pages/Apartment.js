import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import MainHeaderAdmin from '../component/MainHeaderAdmin';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {AddAptModal} from '../component/AddAptModal';
import {EditAptModal} from '../component/EditAptModal';

export class Apartment extends Component {

    constructor(props) {
        super(props);
        this.state = { apts: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'GetApartments')
            .then(response => response.json())
            .then(data => {
                this.setState({ apts: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteApt(aptid) {
        if (window.confirm('Silme işlemi geri döndürülemez. Emin misiniz?')) {
            fetch(process.env.REACT_APP_API + 'ApartmentDelete/'+aptid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
                
            })
        }

       
    }
    render() {
        const { apts, aid, ablock, astatus, atype, afloor, anum, auid } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <MainHeaderAdmin />
                  <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        DAİRE EKLE</Button>

                    <AddAptModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>BLOK</th>
                            <th>DAİRE NUMARASI </th>
                            <th>BULUNDUĞU KAT</th>
                            <th>TİP</th>
                            <th>DOLU(1)/BOŞ(0)</th>             
                        </tr>
                    </thead>
                    <tbody>
                        {apts.map(u =>
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.apartmentBlock}</td>
                                 <td>{u.apartmentNumber}</td>
                                 <td>{u.floor}</td>
                                <td>{u.type}</td>                     
                                <td>{u.status}</td>
                               

                                <td> 
                                    <ButtonToolbar>
                                         <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                                aid: u.id, ablock:u.apartmentBlock, astatus:u.status,
                                                atype:u.type, afloor:u.floor, anum: u.apartmentNumber,
                                                auid:u.userId
                                            })}>
                                            Güncelle
                                        </Button> 
                                        
                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteApt(u.id)}>
                                            Sil
                                        </Button> 

                                          <EditAptModal show={this.state.editModalShow}
                                            onHide={editModalClose}
                                             aid = {aid}
                                             ablock = {ablock}
                                             astatus = {astatus}
                                             atype = {atype}
                                             afloor = {afloor}
                                             anum = {anum}
                                             auid = {auid}

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