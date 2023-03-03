import React from 'react'
import { Container, Table } from 'reactstrap'

const Pedidos = () => {

    const data = [
        {
            mesa:  2,
            quantiadade: 24,
            observacao: 'Caldinho bem quentinho e sem ovo!'
        },
        {
            mesa: 'aaaaa',
            quantiadade: 29,
            observacao: 'Caldinho bem quentinho e sem ovo!'

        }
    ]
    return (
        <Container>
            <div className='table-responsive'>
                <h3>Pedidos</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Mesa</th>
                            <th>Quantidade</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                </Table>
            </div>
        </Container>
    )
}

export default Pedidos