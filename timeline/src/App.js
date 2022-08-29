import './App.scss';

//Componentes
import {MainContainer} from './components/MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>
            <p>Desarrollo de Aplicaciones Híbridas | <b>Juan Axel Jacobo Covarrubias</b></p>
            <p>Instituto Tecnológico de Tepic | ISC</p>
        </span>
      </header>
      <MainContainer></MainContainer>
      <footer className="App-footer"> 
      
      </footer>
    </div>
  );
}

export default App;
