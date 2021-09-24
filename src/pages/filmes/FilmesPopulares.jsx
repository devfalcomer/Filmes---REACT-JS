import React, { useEffect, useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cartao from '../../components/Cartao';
import apiFilmes from '../../services/apiFilmes';

const FilmesPopulares = () => {

    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        
        apiFilmes.get('/movie/popular').then(resultado => {
            setFilmes(resultado.data.results)
        })
    }, [])

    return (
        <>
            <h1>Filmes Populares</h1>

            <Row>
                {filmes.map(filme => (

                    <Col key={filme.id} md={3} className="mb-3">
                        <Cartao title={filme.title} src={'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path}>
                            {filme.original_title} ({filme.release_date})
                            <hr />
                            <Link to={"/filmes/" + filme.id}>
                                <div className="d-grid gap-2">
                                    <Button variant="success" size="lg">
                                        Detalhe
                                    </Button>
                                </div>
                            </Link>
                        </Cartao>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default FilmesPopulares
