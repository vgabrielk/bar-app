import React from 'react'
import { Button, Container, Table } from 'reactstrap'

const Estoque = () => {
    const data = [
        {
            produto: 'Torre de cerveja',
            valor: 23.00,
            disponivel: true,
        },
        {
            produto: 'Caldinho',
            valor: 5.00,
            disponivel: false,
        }
    ]
    return (
        <Container>
            <div className='table-responsive'>
                <h3>Estoque</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Produto</th>
                            <th>Valor</th>
                            <th>Disponibilidade</th>
                            <th>Detalhes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr>
                                <td>{item.produto}</td>
                                <td>R$ {item.valor}</td>
                                <td className={item.disponivel ? 'text-success fw-bold' : 'text-danger'} >
                                    {item.disponivel ? 'Disponível' : 'Indisponível'}
                                </td>
                                <td>
                                    <button className='btn-outline-dark btn'>
                                        Ver detalhes
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}

export default Estoque