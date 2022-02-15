import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {AddWaterModal} from '../component/AddWaterModal';
import {EditWaterModal} from '../component/EditWaterModal';
import MainHeaderAdmin from '../component/MainHeaderAdmin';

export class Water extends Component {

    constructor(props) {
        super(props);
        this.state = { bills: [], addModalShow: false, editModalShow: false }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'AptWaterBills')
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

                    <AddWaterModal show={this.state.addModalShow}
                        onHide={addModalClose} />
                </ButtonToolbar>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            
                            <th>APARTMAN NUMARASI</th>
                            <th>AY</th>
                            <th>YIL</th>
                            <th>ÖDENECEK TUTAR</th>
                            <th>ÖDENMEDİ(0) </th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map(b=>
                            <tr key={b.id}>
                               
                                <td>{b.apartmentId}</td>
                                <td>{b.month}</td>
                                <td>{b.year}</td>
                                <td>{b.amount}</td>
                                <td>{b.isPaid}</td>
                                
                               

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
                                        
                                          <EditWaterModal show={this.state.editModalShow}
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