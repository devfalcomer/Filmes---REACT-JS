import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const Objetos = () => {

    const carros = [
        { marca: 'Audi', modelo: 'A3', ano: 2020, placa: "BGE 0A34", foto: 'https://cdn.motor1.com/images/mgl/nRVvk/s1/audi-a3-sportback-2020-on-location.jpg' },
        { marca: 'Ford', modelo: 'Ranger', ano: 2021, placa: "BGE 0A34", foto: 'https://cdn.motor1.com/images/mgl/kX7nN/s1/ford-ranger-thunder-2020.jpg' },
        { marca: 'Gol', modelo: 'G5', ano: 2015, placa: "BGE 0A34", foto: 'https://th.bing.com/th/id/R.a4876645e43c953781b12927f74181e0?rik=DQBrQcfxqsrfMQ&pid=ImgRaw&r=0' },
        { marca: 'Fiat', modelo: 'Uno', ano: 2010, placa: "BGE 0A34", foto: 'https://th.bing.com/th/id/R.67d0cbf59bb3286efd5d032c7be5b050?rik=lppOhuO3StiAxA&pid=ImgRaw&r=0' },
        { marca: 'GTR', modelo: 'Skyline R34', ano: 2000, placa: "BGE 0A34", foto: 'https://th.bing.com/th/id/R.2c75512fc5e657d75530aa15d19051d3?rik=rnkG8CJHJvVPtA&pid=ImgRaw&r=0' },
        { marca: 'Audi', modelo: 'A3', ano: 2020, placa: "BGE 0A34", foto: 'https://cdn.motor1.com/images/mgl/nRVvk/s1/audi-a3-sportback-2020-on-location.jpg' },
        { marca: 'Ford', modelo: 'Ranger', ano: 2021, placa: "BGE 0A34", foto: 'https://cdn.motor1.com/images/mgl/kX7nN/s1/ford-ranger-thunder-2020.jpg' },
        { marca: 'Gol', modelo: 'G5', ano: 2015, placa: "BGE 0A34", foto: 'https://th.bing.com/th/id/R.a4876645e43c953781b12927f74181e0?rik=DQBrQcfxqsrfMQ&pid=ImgRaw&r=0' },
        { marca: 'Fiat', modelo: 'Uno', ano: 2010, placa: "BGE 0A34", foto: 'https://th.bing.com/th/id/R.67d0cbf59bb3286efd5d032c7be5b050?rik=lppOhuO3StiAxA&pid=ImgRaw&r=0' },
        { marca: 'GTR', modelo: 'Skyline R34', ano: 2000, placa: "BGE 0A34", foto: 'https://th.bing.com/th/id/R.2c75512fc5e657d75530aa15d19051d3?rik=rnkG8CJHJvVPtA&pid=ImgRaw&r=0' },
        { marca: 'Audi', modelo: 'A3', ano: 2020, placa: "BGE 0A34", foto: 'https://cdn.motor1.com/images/mgl/nRVvk/s1/audi-a3-sportback-2020-on-location.jpg' },
        { marca: 'Ford', modelo: 'Ranger', ano: 2021, placa: "BGE 0A34", foto: 'https://cdn.motor1.com/images/mgl/kX7nN/s1/ford-ranger-thunder-2020.jpg' },
        { marca: 'Gol', modelo: 'G5', ano: 2015, placa: "BGE 0A34", foto: 'https://th.bing.com/th/id/R.a4876645e43c953781b12927f74181e0?rik=DQBrQcfxqsrfMQ&pid=ImgRaw&r=0' },
        { marca: 'Fiat', modelo: 'Uno', ano: 2010, placa: "BGE 0A34", foto: 'https://th.bing.com/th/id/R.67d0cbf59bb3286efd5d032c7be5b050?rik=lppOhuO3StiAxA&pid=ImgRaw&r=0' },
        { marca: 'GTR', modelo: 'Skyline R34', ano: 2000, placa: "BGE 0A34", foto: 'https://th.bing.com/th/id/R.2c75512fc5e657d75530aa15d19051d3?rik=rnkG8CJHJvVPtA&pid=ImgRaw&r=0' },
        { marca: 'Toyota', modelo: 'Supra MK4', ano: 2005, placa: "BGE 0A34", foto: 'https://th.bing.com/th/id/OIP.PGgYI5xld81mDivAwhS9hQHaFj?pid=ImgDet&rs=1' }
    ]

    return (
        <>
            <h1>Obejto de carros</h1>

            <Row>
                {carros.map((carro, i) => (
                    <Col key={i} md={3} className="mb-3">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={carro.foto} />
                            <Card.Body>
                                <Card.Title>{carro.marca + ' - ' + carro.modelo}</Card.Title>
                                <Card.Text>
                                    <p>Placa: {carro.placa}</p>
                                    <p>Ano de Fábricação: {carro.ano}</p>
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Objetos
