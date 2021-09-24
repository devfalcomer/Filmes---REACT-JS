import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import Cartao from '../../components/Cartao';
import apiFilmes from '../../services/apiFilmes';

const MelhoresFilmes = () => {

    const [melhores, setMelhores] = useState([])

    useEffect(() => {
        apiFilmes.get('/movie/top_rated').then(resultado => {
            setMelhores(resultado.data.results)
        })
    }, [])

    return (
        <>
            <h1>Melhores Filmes</h1>

            <Row>
                {melhores.map(filme => (

                    <Col key={filme.id} md={3} className="mb-3">
                        <Cartao title={filme.title} src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path}>
                            {filme.original_title} ({filme.release_date})
                            <Button variant="success">Detalhe</Button>
                        </Cartao>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default MelhoresFilmes