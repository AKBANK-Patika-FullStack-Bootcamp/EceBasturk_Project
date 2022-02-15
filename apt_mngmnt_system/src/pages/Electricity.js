import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import MainHeaderAdmin from '../component/MainHeaderAdmin';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {AddElecModal} from '../component/AddElecModal';
import {EditElecModal} from '../component/EditElecModal';

export class Electricity extends Component {

    constructor(props) {
        super(props);
        this.state = { bills: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'AptElectricBills')
            .then(response => response.json())
            .then(data => {
                this.setState({ bills: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { bills, bid, bmonth, byear, bamount, bpaid, baid } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
               <MainHeaderAdmin />
                  <ButtonToolbar>
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        FATURA EKLE</Button>

                    <AddElecModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            
                            <th>AY</th>
                            <th>YIL</th>
                            <th>ÖDENECEK TUTAR</th>
                            <th>ÖDENMEDİ(0) </th>
                            <th>APARTMAN NUMARASI</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map(b=>
                            <tr key={b.id}>
                                <td>{b.id}</td>
                                
                                <td>{b.month}</td>
                                <td>{b.year}</td>
                                <td>{b.amount}</td>
                                <td>{b.isPaid}</td>
                                <td>{b.apartmentId}</td>
                               

                                <td> 
                                    <ButtonToolbar>
                                         <Button className="mr-2" variant="info"
                                            onClick={() => this.setState({
                                                editModalShow: true,
                                               
                                                bid: b.id, bmonth:b.month,  byear:b.year,
                                                bamount: b.amount, bpaid: b.isPaid, baid:b.apartmentId
                                            })}>
                                            Güncelle
                                        </Button> 

                                          <EditElecModal show={this.state.editModalShow}
                                            onHide={editModalClose} 
                                             bid = {bid}
                                             bmonth = {bmonth}
                                             byear = {byear}
                                             bamount = {bamount}
                                             bpaid = {bpaid}
                                             baid = {baid}

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