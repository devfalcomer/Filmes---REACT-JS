import React from 'react'
import { Switch, Route} from 'react-router-dom';
import Arrays from './pages/Arrays';
import Estados from './pages/Estados';
import FilmesDetalhes from './pages/filmes/FilmesDetalhes';
import FilmesPopulares from './pages/filmes/FilmesPopulares';
import MelhoresFilmes from './pages/filmes/MelhoresFilmes';
import HelloWorld from './pages/HelloWorld';
import Objetos from './pages/Objetos';
import PaginaInicial from './pages/PaginaInicial';
import Tabela from './pages/Tabela';

const Rotas = () => {
    return (
        <div>
            <Switch>
              <Route exact path="/" component= {HelloWorld}></Route>
              <Route exact path="/hello-world" component= {HelloWorld}></Route>
              <Route exact path="/inicial" component= {PaginaInicial}></Route>
              <Route exact path="/arrays" component= {Arrays}></Route>
              <Route exact path="/objetos" component= {Objetos}></Route>
              <Route exact path="/tabelas" component= {Tabela}></Route>
              <Route exact path="/states" component= {Estados}></Route>
              <Route exact path="/filmes/populares" component= {FilmesPopulares}></Route>
              <Route exact path="/filmes/melhores" component= {MelhoresFilmes}></Route>
              <Route exact path="/filmes/:id" component= {FilmesDetalhes}></Route>
            </Switch>
        </div>
    )
}

export default Rotas
