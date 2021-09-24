import React, { useEffect, useState } from 'react'
import { Card, CardImg, Col, Row } from 'react-bootstrap'
import apiFilmes from '../../services/apiFilmes'

const FilmesDetalhes = (props) => {

    const [filme, setFilme] = useState({})
    const [creditos, setCreditos] = useState({})

    useEffect(() => {
        const id = props.match.params.id

        apiFilmes.get(`/movie/${id}?language=pt-BR`).then(resultado => {
            setFilme(resultado.data);
        })

        apiFilmes.get(`/movie/${id}/credits?language=pt-BR`).then(resultado => {
            setCreditos(resultado.data);
        })

    }, [props])

    return (
        <>
            {filme.id &&
                <Row>
                    <Col md={3}>
                        <Card>
                            <CardImg variant="top" src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} />
                        </Card>
                    </Col>
                    <Col md={3}>
                        <h1>{filme.title}</h1>
                        <p>{filme.overview}</p>
                        <p>Popularidade: {filme.popularity}</p>
                        <p>Lançamento: {filme.release_date}</p>
                        <p>Generos:
                            {filme.genres.map((genre, indexg) => (
                                <span key={indexg}> {genre.name} | </span>
                            ))}
                        </p>
                        <p>Empresas:
                            {filme.production_companies.map(company => (
                                <span key={company.id}>
                                    <img
                                        height="30px"
                                        src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                                        alt={company.name}
                                        title={company.name}
                                    />
                                </span>
                            ))}
                        </p>
                    </Col>
                </Row>

            }

            {creditos.id &&
                <Row>
                    {creditos.cast.map((ator,) => (
                        <Col key={ator.id} md={2}>
                            <p>{ator.name}</p>
                            <Card>
                                <CardImg variant="top" src={`https://image.tmdb.org/t/p/w500/${ator.profile_path}`} />
                            </Card>
                        </Col>
                    ))
                    }
                </Row>
            }
        </>
    )
}

export default FilmesDetalhes
