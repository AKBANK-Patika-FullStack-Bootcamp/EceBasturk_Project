import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import MainHeaderUser from '../component/MainHeaderUser';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddPayModal } from '../component/AddPayModal';

export class Resident extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dbills: [], ebills: [], wbills: [],
            dpaid: [], epaid: [], wpaid: [], addModalShow: false, editModalShow: false
        }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'UnpaidDueBills/2')
            .then(response => response.json())
            .then(data => {
                this.setState({ dbills: data });
            });

        fetch(process.env.REACT_APP_API + 'UnpaidElectricityBills/2')
            .then(response => response.json())
            .then(data => {
                this.setState({ ebills: data });
            });

        fetch(process.env.REACT_APP_API + 'UnpaidWaterBills/2')
            .then(response => response.json())
            .then(data => {
                this.setState({ wbills: data });
            });

        fetch(process.env.REACT_APP_API + 'PaidDueBills/2')
            .then(response => response.json())
            .then(data => {
                this.setState({ dpaid: data });
            });

        fetch(process.env.REACT_APP_API + 'PaidElectricityBills/2')
            .then(response => response.json())
            .then(data => {
                this.setState({ epaid: data });
            });

        fetch(process.env.REACT_APP_API + 'PaidWaterBills/2')
            .then(response => response.json())
            .then(data => {
                this.setState({ wpaid: data });
            });
    }





    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { dbills,
        ebills, wbills, dpaid, epaid, wpaid } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });

        return (
            <div >
                <MainHeaderUser />
                <br />
                <h4>??DENMEM???? A??DATLAR</h4>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>AY</th>
                            <th>YIL</th>
                            <th>??DENECEK TUTAR</th>
                            <th>??DE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dbills.map(b =>
                            <tr key={b.id}>
                                <td>{b.month}</td>
                                <td>{b.year}</td>
                                <td>{b.amount}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className='mr2' variant='danger'
                                            onClick={() => this.setState({ addModalShow: true })}>
                                            ??DE
                                        </Button>
                                        <AddPayModal show={this.state.addModalShow}
                                            onHide={addModalClose} />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                <br /> <br />
                <h4>??DENMEM???? ELEKTR??K FATURALARI</h4>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>AY</th>
                            <th>YIL</th>
                            <th>??DENECEK TUTAR</th>
                            <th>??DE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ebills.map(b =>
                            <tr key={b.id}>
                                <td>{b.month}</td>
                                <td>{b.year}</td>
                                <td>{b.amount}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className='mr2' variant='danger'
                                            onClick={() => this.setState({ addModalShow: true })}>
                                            ??DE
                                        </Button>
                                        <AddPayModal show={this.state.addModalShow}
                                            onHide={addModalClose} />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>
                <br /> <br />
                <h4>??DENMEM???? SU FATURALARI</h4>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>AY</th>
                            <th>YIL</th>
                            <th>??DENECEK TUTAR</th>
                            <th>??DE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wbills.map(b =>
                            <tr key={b.id}>
                                <td>{b.month}</td>
                                <td>{b.year}</td>
                                <td>{b.amount}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button className='mr2' variant='danger'
                                            onClick={() => this.setState({ addModalShow: true })}>
                                            ??DE
                                        </Button>
                                        <AddPayModal show={this.state.addModalShow}
                                            onHide={addModalClose} />
                                    </ButtonToolbar>
                                </td>
                            </tr>)}
                    </tbody>
                </Table>


                <h4>??DENM???? A??DATLAR</h4>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>AY</th>
                            <th>YIL</th>
                            <th>??DENECEK TUTAR</th>

                        </tr>
                    </thead>
                    <tbody>
                        {dpaid.map(b =>
                            <tr key={b.id}>
                                <td>{b.month}</td>
                                <td>{b.year}</td>
                                <td>{b.amount}</td>

                            </tr>)}
                    </tbody>
                </Table>
                <br /> <br />
                <h4>??DENM???? ELEKTR??K FATURALARI</h4>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>AY</th>
                            <th>YIL</th>
                            <th>??DENECEK TUTAR</th>

                        </tr>
                    </thead>
                    <tbody>
                        {epaid.map(b =>
                            <tr key={b.id}>
                                <td>{b.month}</td>
                                <td>{b.year}</td>
                                <td>{b.amount}</td>

                            </tr>)}
                    </tbody>
                </Table>
                <br /> <br />


                <h4>??DENM???? SU FATURALARI</h4>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>AY</th>
                            <th>YIL</th>
                            <th>??DENECEK TUTAR</th>

                        </tr>
                    </thead>
                    <tbody>
                        {wpaid.map(b =>
                            <tr key={b.id}>
                                <td>{b.month}</td>
                                <td>{b.year}</td>
                                <td>{b.amount}</td>

                            </tr>)}
                    </tbody>
                </Table>



            </div>
        )
    }
}