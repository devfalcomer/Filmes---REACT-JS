import React from 'react';
import { Container } from 'react-bootstrap';
import Box from '../components/Box';
import HelloWorld from './HelloWorld';


const PaginaInicial = () => {
    return (
        <>
            <Container>
            <p>
                Arthur Falcomer Silva dos Santos
            </p>
            <Box />
            <HelloWorld />
            
            </Container>
        </>
    )
}

export default PaginaInicial
