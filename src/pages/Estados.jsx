import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Estados = () => {

    const [contador, setContador] = useState(0)

    function adicionar() {
        const valor = contador + 1
        setContador(valor)
    }

    function subtrair() {
        if (contador !== 0) {
            const valor = contador - 1
            setContador(valor)
        }
    }

    return (
        <>
            <h1>States</h1>

            <Button variant="danger" onClick={adicionar}>+</Button>
            <span>{' ' + contador + ' '}</span>
            <Button variant="success" onClick={subtrair}>-</Button>
        </>
    )
}

export default Estados
