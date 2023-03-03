import React from 'react'
import { Container, Table } from 'reactstrap'

const Mesas = () => {
    return (
        <Container>
            <div className='table-responsive'>
                <h3>Mesas</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Número</th>
                        </tr>
                    </thead>
                </Table>
            </div>
        </Container>
    )
}

export default Mesas