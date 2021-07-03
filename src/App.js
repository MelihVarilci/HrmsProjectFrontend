import './App.css';
import Navi from './layouts/Navi';
import Homepage from './pages/Homepage';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <Navi />
      <Container>
        <Homepage />
      </Container>
    </div>
  );
}

export default App;
