import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand to="/" >Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/hello-world">HelloWorld</Link>
                    <Link className="nav-link" to="/inicial">Pagina Inicial</Link>
                    <Link className="nav-link" to="/arrays">Arrays</Link>
                    <Link className="nav-link" to="/objetos">Objetos</Link>
                    <Link className="nav-link" to="/tabelas">Tabela de Carros</Link>
                    <Link className="nav-link" to="/states">Estados</Link>
                    <Link className="nav-link" to="/filmes/populares">Filmes Populares</Link>
                    <Link className="nav-link" to="/filmes/melhores">Melhores Filmes</Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Menu
