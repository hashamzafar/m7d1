import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Table } from "react-bootstrap"
class JobsList extends Component {
    render() {
        return (
            <Table striped bordered hover className="bg-info mt-5">
                <thead>
                    <tr className="bg-info">


                        <th>Search Result</th>
                    </tr>


                </thead>
                {this.props.jobs?.slice(0, 15).map(job =>






                    <tbody>
                        <tr className="bg-secondary">


                            <td>  {job.company_name}</td>

                        </tr>


                    </tbody>


                )}
            </Table>
        );
    }
}

export default JobsList;