import React from 'react'
import { Alert } from 'react-bootstrap'

const Arrays = () => {

    const carros = [
        'Audi A3',
        'Ford Ranger',
        'Gol',
        'Fiat Uno',
        'Subaru'
    ]

    return (
        <>
            <h1>Carros</h1>

            {carros.map(carro => (
                <p>{carro}</p>
            ))}

            {carros.map(carro => (
                <Alert variant="danger">{carro}</Alert>
            ))}

        </>
    )
}

export default Arrays
