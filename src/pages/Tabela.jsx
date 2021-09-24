import React from 'react'
import { Table } from 'react-bootstrap'

const Tabela = () => {

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
            <h1>Tabela de carros</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Ano</th>
                        <th>Placa</th>
                    </tr>
                </thead>
                <tbody>
                    {carros.map((carro, i) => (
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{carro.marca}</td>
                        <td>{carro.modelo}</td>
                        <td>{carro.ano}</td>
                        <td>{carro.placa}</td>
                    </tr>
                    ))}

                </tbody>
            </Table>
        </>
    )
}

export default Tabela
