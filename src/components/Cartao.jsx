import React from 'react'
import { Card } from 'react-bootstrap'

const Cartao = (props) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src={props.src} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <hr />
                    <Card.Text>
                        {props.children}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cartao
