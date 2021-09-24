import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter} from 'react-router-dom';
import Rotas from './Rotas';
import Menu from './components/Menu';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>

      <Container>
      <Rotas />
      </Container>
      
      </BrowserRouter>
    </>
  );
}

export default App;
