import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { AiOutlineStock } from 'react-icons/ai'
import { MdOutlineLogout, MdRequestPage } from 'react-icons/md'
import {SiAirtable} from 'react-icons/si'
import './index.css'
const SideBar = () => {
    const routes = useLocation()
    if (routes.pathname == '/') {
        window.location.href = '/pedidos'
    }
    return (
        <div className='sidebar'>
            <ListGroup>
                <ListGroupItem>
                    <div className='d-flex justify-content-center'>
                    <img width='50px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CAU" alt="" />
                    </div>
                </ListGroupItem>
                <Link className='text-dark' to='/pedidos'>
                    <ListGroupItem className='d-flex justify-content-between' >
                        Pedidos
                        <MdRequestPage className='ms-4' size={35} />
                    </ListGroupItem>
                </Link>
                <Link className='text-dark' to='/estoque'>
                    <ListGroupItem className='d-flex justify-content-between' >
                        Estoque
                        <AiOutlineStock className='ms-4' size={35} />
                    </ListGroupItem>
                </Link>
                <Link className='text-dark' to='/mesas'>
                    <ListGroupItem className='d-flex justify-content-between' >
                        Mesas
                        <SiAirtable className='ms-4' size={35} />
                    </ListGroupItem>
                </Link>
                <Link className='text-dark' to={routes.pathname}>
                    <ListGroupItem className='d-flex justify-content-between' >
                       Sair
                        <MdOutlineLogout className='ms-4' size={35} />
                    </ListGroupItem>
                </Link>
            </ListGroup>
        </div>
    )
}

export default SideBar